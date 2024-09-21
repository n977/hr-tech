"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useAuth } from "@/lib/auth";
import { LOGIN } from "@/lib/graphql";
import { useRouter } from "next/navigation";

export function Login() {
  const router = useRouter();
  const login = useAuth((state) => state.login);
  const [loginMutate, { data, error }] = useMutation(LOGIN);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await loginMutate({
        variables: {
          email,
          password,
        },
      });
    } catch {
      console.error("failed to log in");
    }
  };

  useEffect(() => {
    if (!data) return;

    console.log("Logging in using provided credentials.");
    window.localStorage.setItem("refreshToken", data.login.refresh_token);
    login(data.login.access_token);
    router.push("/profile/time-off");
  }, [data]);

  return (
    <Card className="m-8 max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="grid items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" name="password" required />
          </div>
          <div>{error && <p className="text-sm">Failed to log in</p>}</div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
