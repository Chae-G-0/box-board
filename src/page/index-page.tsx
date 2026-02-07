import NavList from "@/components/nav-item/nav-list";

export default function IndexPage() {
  return (
    <div className="w-100% flex flex-col gap-5">
      <div className="flex gap-5">
        <NavList />
      </div>
      <div>
        <div className="pb-2 text-xl font-bold">회원정보</div>
        <div className="rounded-lg border p-4"></div>
      </div>
    </div>
  );
}
