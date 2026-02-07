import { NAV_MENU } from "@/lib/constant";
import NavItem from "./nav-item";

export default function NavList() {
  return (
    <>
      {NAV_MENU.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </>
  );
}
