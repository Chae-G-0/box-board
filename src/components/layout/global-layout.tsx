import { Link, Outlet } from "react-router";
import Sidebar from "../sidebar/sidebar";
import ProfileButton from "../header/profile-button";

export default function GlobalLayout() {
  return (
    <div className="min-h-screen w-full">
      <header className="flex h-[60px] min-w-[480px] items-center justify-between border-b px-40">
        <Link to={"/"}>
          <div className="text-xl font-bold">boxname</div>
        </Link>
        <ProfileButton />
      </header>
      <div className="flex h-[calc(100vh-60px)]">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="flex-4 p-[24px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
