import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full px-6">
      <h1 className="text-center text-2xl mb-6 text-primary">我的</h1>
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
          <Link
            className="flex items-center px-0 leading-10"
            href={"/baibai/history"}
          >
            <span>拜拜记录</span>
            <span className="text-gray-400 text-sm ml-auto">0 条记录</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center px-0 leading-10"
            href={"/baibai/remind"}
          >
            <span>每日拜拜提醒</span>
            <span className="text-gray-400 text-sm ml-auto">已关闭</span>
          </Link>
        </li>
      </ul>
      <ul className="card bg-base-100 rounded-box shadow-lg px-5 py-0">
        <li className="border-b">
          <label
            className="flex items-center leading-10 px-0"
            htmlFor="like-app-toggle"
          >
            <img src="" alt="好评鼓励" className="block w-6 h-6" />
            <span>好评鼓励</span>
          </label>
        </li>
        <li className="border-b">
          <Link
            href={"/baibai/share"}
            className="flex items-center leading-10 px-0"
          >
            <img src="" alt="推荐分享" className="block w-6 h-6" />
            <span>推荐分享</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/baibai/about"}
            className="flex items-center leading-10 px-0"
          >
            <img src="" alt="关于拜拜" className="block w-6 h-6" />
            <span>关于拜拜</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
