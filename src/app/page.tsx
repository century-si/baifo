import Link from "next/link";

async function getData() {
  const res = await fetch('http://localhost:3000/api/getData');
  const data = await res.json();
  return data;
}

export default async function Page() {
  const res = await getData();
  console.log(res);
  
  return (
    <main className="flex-1 px-5 pt-8">
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
