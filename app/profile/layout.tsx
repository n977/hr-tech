"use client";
import { Profile } from "@/components/profile";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAuth((state) => state.user);

  // HACK: should be replaced with the server authentication in production.
  // As things stand, there is no way to prove a user's identity before serving
	// the page without rerouting every API call through our own backend, which is 
	// out of scope of this project.
	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [])

  return (
    <main>
      <Profile.Header />
      <div className="grid grid-cols-1 lg:grid-cols-[16rem,_minmax(0,_56rem)] gap-8 lg:px-16 bg-gray-100">
        <Profile.Sidebar />
        {children}
      </div>
    </main>
  );
}
