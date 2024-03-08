import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-6">
      <h1 className="mx-auto text-[30px]">欢迎来拜拜!</h1>
      <Link
        className="flex justify-center items-center border border-white h-10 bg-yellow-200 mt-10 rounded-md"
        href="/baibai"
      >
        进入拜拜系统
      </Link>
    </main>
  );
}
