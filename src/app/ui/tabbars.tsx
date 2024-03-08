"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "拜拜",
    href: "/baibai",
  },
  {
    label: "我",
    href: "/baibai/me",
  },
];

export default function TabbarLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            "flex flex-col justify-center items-center flex-1 text-xs h-full",
            { 'bg-sky-100 text-blue-600' : href === pathname }
          )}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
