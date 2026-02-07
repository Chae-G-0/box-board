import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="m-auto w-[360px]">
        <Outlet />
      </div>
    </div>
  );
}
