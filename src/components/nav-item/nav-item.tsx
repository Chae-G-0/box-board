import { Link } from "react-router";

export default function NavItem({
  id,
  label,
  link,
}: {
  id: string;
  label: string;
  link: string;
}) {
  return (
    <Link to={link} className="flex-1">
      <div className="h-50 rounded-lg border p-4 hover:shadow-sm">
        <div className="text-xl font-bold">{label}</div>
        <div>content</div>
      </div>
    </Link>
  );
}
