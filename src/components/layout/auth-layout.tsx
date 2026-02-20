import { useSession } from "@/store/session";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const session = useSession();
  if (session) return <Navigate to={"/"} replace={true} />;

  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="m-auto w-[360px]">
        <Outlet />
      </div>
    </div>
  );
}
