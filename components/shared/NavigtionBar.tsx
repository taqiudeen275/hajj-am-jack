import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconHome,
  IconImageInPicture,
  IconInfoCircle,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import { FloatingDock } from "../acernity/floating-dock";

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
        <IconImageInPicture className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone />
      ),
      href: "/contact",
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
    <div className="fixed sm:top-6 sm:right-4 z-50 bottom-20 right-2">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
