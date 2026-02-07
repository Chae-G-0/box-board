import { MENU } from "@/lib/constant";
import MenuItem from "./menu-item";

export default function Sidebar() {
  return (
    <div className="m-6 mr-0 flex h-[calc(100vh-100px)] min-h-160 flex-col justify-between rounded-lg border p-4">
      <div className="flex flex-col">
        {MENU.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
