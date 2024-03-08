"use client";
import TabbarLinks from "@/app/ui/tabbars";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Link href="/" className="absolute top-4 right-4 text-black">
        退出
      </Link>
      <div
        className={clsx(
          "flex flex-1 flex-col items-center pt-2",
          pathname === "baibai" ? "bg-gray-300" : "bg-gray-100"
        )}
      >
        {children}
      </div>
      <div className="z-10 fixed left-0 bottom-0 w-full bg-white flex items-center h-16">
        <TabbarLinks />
      </div>
    </div>
  );
}
