"use client";
import {
  User,
  DotsThreeVertical,
  CaretDown,
  Gear,
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  Phone,
  Envelope,
  Hash,
  Clock,
  UsersThree,
  Globe,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Reduce } from "@/components/reduce";
import { Button } from "./ui/button";
import { useAuth } from "@/lib/auth";

const tabs = [
  {
    name: "Personal",
    href: "/profile",
  },
  {
    name: "Job",
    href: "/profile/job",
  },
  {
    name: "Time Off",
    href: "/profile/time-off",
  },
  {
    name: "Emergency",
    href: "/profile/emergency",
  },
  {
    name: "Documents",
    href: "/profile/documents",
  },
  {
    name: "Notes",
    href: "/profile/notes",
  },
  {
    name: "Benefits",
    href: "/profile/benefits",
  },
  {
    name: "Training",
    href: "/profile/training",
  },
  {
    name: "Assets",
    href: "/profile/assets",
  },
];

function Header() {
  const user = useAuth((state) => state.user);

  return (
    <header className="grid grid-cols-[auto_minmax(0,_1fr)] gap-4 bg-blue-100 pt-8 lg:px-16">
      <div className="lg:w-64 lg:row-span-2 ml-8 lg:ml-0">
        <Avatar className="lg:w-48 lg:h-48 lg:text-[4rem] z-[1] mx-auto">
          <AvatarImage src={user?.avatarUrl || ""} />
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-between items-end mr-8 lg:mr-0">
        <div className="text-4xl font-bold">{user?.name}</div>
        <Reduce>
          <Reduce.Button>
            <DotsThreeVertical className="text-2xl" />
          </Reduce.Button>
          <Reduce.Body>
            <Button variant="outline">
              Request a change <CaretDown />
            </Button>
            <Button variant="outline">
              <Gear />
              <CaretDown />
            </Button>
          </Reduce.Body>
        </Reduce>
      </div>
      <nav className="col-span-2 lg:col-start-2 lg:mt-auto lg:max-w-4xl overflow-x-auto">
        <ul className="flex">
          {tabs.map((item, i) => (
            <li
              key={i}
              data-active={item.name === "Time Off" ? "" : null}
              className="hover:text-accent-foreground transition-colors px-4 py-2 rounded-t-lg data-[active]:bg-white"
            >
              <Link href={item.href} className="whitespace-nowrap">
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="px-4 py-2 flex gap-2 items-center hover:text-accent-foreground transition-colors">
              More <CaretDown />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-64 -translate-y-4">
      <Card>
        <CardContent className="flex flex-col gap-2">
          <a href="#" className="flex gap-2 items-center">
            <Phone /> 07911 654321
          </a>
          <a href="#" className="flex gap-2 items-center">
            <Envelope /> avd.yana@videoroll.net
          </a>
          <div className="flex gap-2">
            <a href="#">
              <LinkedinLogo />
            </a>
            <a href="#">
              <FacebookLogo />
            </a>
            <a href="#">
              <TwitterLogo />
            </a>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="font-medium text-md">Hire Date</CardTitle>
          <time>Sep. 3, 2020</time>
          <div>3y - 9m - 20d</div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Hash /> 5
          </div>
          <div className="flex gap-2 items-center">
            <Clock /> Full-Time
          </div>
          <div className="flex gap-2 items-center">
            <UsersThree /> Operations
          </div>
          <div className="flex gap-2 items-center">
            <Globe /> Europe
          </div>
          <div className="flex gap-2 items-center">
            <MapPin /> London, UK
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="font-medium text-md">Direct Reports</CardTitle>{" "}
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="flex gap-2 items-center">
                <User />
                Shane
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 items-center">
                <User />
                Nathan
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 items-center">
                <User />
                Mitchell
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 items-center">
                <User />
                Philip
              </a>
            </li>
          </ul>
          <button className="flex gap-2 items-center">
            <UsersThree />4 More...
          </button>
        </CardContent>
      </Card>
    </aside>
  );
}

export const Profile = {
  Header,
  Sidebar,
};
