import { Link } from "react-router";
import { PopoverClose } from "@radix-ui/react-popover";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { UserRound } from "lucide-react";
import { signOutAPI } from "@/api/auth";

export default function ProfileButton() {
  const buttonStyle = `hover:bg-muted cursor-pointer px-4 py-3 text-sm`;

  return (
    <Popover>
      <PopoverTrigger>
        <div className="hover:bg-muted cursor-pointer rounded-full p-2">
          <UserRound />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex w-40 flex-col p-0">
        <PopoverClose asChild>
          <Link to={"/profile"}>
            <div className={buttonStyle}>마이페이지</div>
          </Link>
        </PopoverClose>
        <PopoverClose asChild>
          <div onClick={signOutAPI} className={buttonStyle}>
            로그아웃
          </div>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
