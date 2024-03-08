import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full">
      <h1 className="text-center text-[30px] text-orange-300">我的</h1>
      <ul className="my-header card bg-base-100 rounded-box mb-8 shadow-lg px-5 py-0">
        <li className="flex flex-row border-b bg-right-bottom">
          <div className="block pt-6 pb-0 px-0 w-2/5">
            <p className="text-xs">功德点</p>
            <p className="text-primary text-2xl">10</p>
          </div>
          <div className="block pt-6 pb-0 w-3/5">
            <p className="text-xs">拜拜天数</p>
            <p className="text-primary text-2xl">0</p>
          </div>
        </li>
        <li className="border-b">
          <Link href={"/baibai/history"}>拜拜记录</Link>
        </li>
        <li>
          <Link href={"/baibai/remind"}>每日拜拜提醒</Link>
        </li>
      </ul>
    </div>
  );
}
