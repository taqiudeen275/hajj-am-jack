"use client";
import CompanyLogo from "@/components/shared/Logo";
import { NavigationBar } from "@/components/shared/NavigtionBar";
import Link from "next/link";
import React from "react";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Link href={"/"} className="fixed top-6 left-10 z-50 w-ma">
        <CompanyLogo
          className="max-w-xs mx-auto"
          textClassName="text-primary"
        />
      </Link>
      {children}
      <footer className="py-4">
        <p className="text-center text-sm text-gray-500">
        © 2024 Hajj A.M JACK FI Company Ltd. All rights reserved | Developed By ATS Tech
        </p>
      </footer>
    </>
  );
};

export default Providers;
