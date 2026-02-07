import { Link } from "react-router";

export default function MenuItem({
  id,
  label,
  link,
}: {
  id: string;
  label: string;
  link: string;
}) {
  return (
    <Link to={link} className="hover:bg-muted rounded-md p-2 text-sm">
      {label}
    </Link>
  );
}
