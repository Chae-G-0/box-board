import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function BoardLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="pb-4 text-3xl font-extrabold">{title}</div>
        <Button variant={"outline"} className="cursor-pointer">
          글쓰기
          <Plus />
        </Button>
      </div>
      <div>게시글 리스트</div>
      {children}
    </div>
  );
}
