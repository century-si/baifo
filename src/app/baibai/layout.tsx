"use client";
import TabbarLinks from "@/app/ui/tabbars";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../ui/base.css";
import { isShowHeaderConfig } from "./config";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <header
        className={clsx(
          "flex py-4 w-full bg-base-100 px-1",
          isShowHeaderConfig[pathname as keyof typeof isShowHeaderConfig]?.show
            ? ""
            : "hidden"
        )}
      >
        <button onClick={() => window.history.back()}>
          <i className="bi bi-chevron-left"></i> {"返回"}
        </button>
        <span className="flex-1 text-center">
          {
            isShowHeaderConfig[pathname as keyof typeof isShowHeaderConfig]
              ?.title
          }
        </span>
      </header>
      <Link href="/" className="absolute top-4 right-4 text-black">
        <Image
          src="/icons/close.svg"
          width={30}
          height={30}
          className=""
          alt="Screenshots of the dashboard project showing desktop version"
        />
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
