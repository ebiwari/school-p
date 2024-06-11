import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";
import "../globals.css";
import SideBar from "@/components/student/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function StudenttLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen bg-slate-200 grid grid-cols-6">
      <SideBar />

      <div className="col-span-5 ml-4 p-2">{children}</div>
    </div>
  );
}