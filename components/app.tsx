"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlass,
  Gear,
  Bell,
  Question,
  User,
  List,
  DoorOpen,
} from "@phosphor-icons/react/dist/ssr";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Reduce } from "@/components/reduce";
import { useAuth } from "@/lib/auth";
import { redirect, useRouter } from "next/navigation";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My Info",
    href: "/profile",
  },
  {
    name: "People",
    href: "/people",
  },
  {
    name: "Hiring",
    href: "/hiring",
  },
  {
    name: "Reports",
    href: "/reports",
  },
  {
    name: "Files",
    href: "/files",
  },
];

export function Header() {
  const router = useRouter();
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="flex items-center h-16 px-6 justify-between bg-white gap-2">
      <Link href="/" className="font-bold">
        HarmonyHR
      </Link>
      <nav className="flex mt-auto">
        <ul className="hidden lg:flex">
          {pages.map((item, i) => (
            <li
              key={i}
              // HACK: Should be replaced with proper path matching in production.
              data-active={item.name === "My Info" ? "" : null}
              className="hover:text-gray-700 px-4 py-2 rounded-t-lg data-[active]:bg-blue-100 transition-colors"
            >
              <Link href={item.href} className="whitespace-nowrap">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Reduce>
        <Reduce.Button className="text-2xl border border-foreground rounded-lg hover:bg-gray-100 transition-colors">
          <MagnifyingGlass />
        </Reduce.Button>
        <Reduce.Body>
          <div className="relative">
            <MagnifyingGlass className="absolute top-3 left-2" />
            <Input placeholder="Search" className="pl-12" />
          </div>
        </Reduce.Body>
      </Reduce>
      <div className="flex gap-4 items-center text-2xl">
        <Reduce>
          <Reduce.Button>
            <List />
          </Reduce.Button>
          <Reduce.Body>
            <button className="hover:text-accent-foreground transition-colors">
              <Gear />
            </button>
            <button className="hover:text-accent-foreground transition-colors">
              <Question />
            </button>
            <button className="hover:text-accent-foreground transition-colors">
              <Bell />
            </button>
          </Reduce.Body>
        </Reduce>
        <Avatar>
          <AvatarImage src={user?.avatarUrl || ""} />
          <AvatarFallback>
            <User />
          </AvatarFallback>
          {user && (
            <button
              onClick={handleLogout}
              className="flex items-center justify-center
					 w-full h-full absolute bg-white opacity-0
					  hover:opacity-100 transition-opacity"
            >
              <DoorOpen />
            </button>
          )}
        </Avatar>
      </div>
    </header>
  );
}
