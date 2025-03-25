"use client";
import CompanyLogo from "@/components/shared/Logo";
import { NavigationBar } from "@/components/shared/NavigtionBar";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import React from "react";
interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <Link href={"/"} className="fixed top-6 left-10 z-40 w-max h-max">
        <CompanyLogo
          className="max-w-xs mx-auto"
          textClassName="text-primary"
        />
      </Link>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      <footer className="py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hajj A.M JACK FI Company Ltd. All rights reserved | Developed By ATS Tech
        </p>
      </footer>
    </>
  );
};

export default Providers;
