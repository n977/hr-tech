"use client";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { MY_PROFILE, REFRESH_TOKEN } from "@/lib/graphql";
import { useMutation, useQuery } from "@apollo/client";

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const user = useAuth((state) => state.user);
  const login = useAuth((state) => state.login);
  const setName = useAuth((state) => state.setName);
  const setAvatar = useAuth((state) => state.setAvatar);

  const [refreshMutate, { data }] = useMutation(REFRESH_TOKEN);
  const { data: profile, refetch } = useQuery(MY_PROFILE, {
    skip: !user,
    context: {
      headers: {
        authorization: user && `Bearer ${user.accessToken}`,
      },
    },
  });

  // Fetch a new access token for the current session using a cached refresh token,
  // if exists.
  useEffect(() => {
    const refreshToken = window.localStorage.getItem("refreshToken");

    if (refreshToken)
      refreshMutate({
        variables: {
          refreshToken,
        },
      });
  }, []);

  useEffect(() => {
    if (!data) return;

    console.log("Found a cached refresh token. Logging in automatically.");
    window.localStorage.setItem(
      "refreshToken",
      data.refreshToken.refresh_token,
    );
    login(data.refreshToken.access_token);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [user]);

  useEffect(() => {
    if (!user || !profile) return;

    setName(profile.myProfile.name);
    setAvatar(profile.myProfile.avatar);
  }, [profile]);

  return children;
}
