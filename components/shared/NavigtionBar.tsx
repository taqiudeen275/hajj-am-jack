import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandBlogger,
  IconBrandFacebook,
  IconHome,
  IconInfoCircle,
  IconPhone,
} from "@tabler/icons-react";
import { FloatingDock } from "../acernity/floating-dock";
import { ImageIcon } from "lucide-react";

export function NavigationBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Gallery",
      icon: (
        <ImageIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/gallery",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Blog",
      icon: (
        <IconBrandBlogger className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
  
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed sm:top-6 sm:right-4 bottom-20 right-2 z-50  h-max">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
