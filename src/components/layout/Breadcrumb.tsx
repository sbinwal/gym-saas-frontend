import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-600">
      {paths.map((p, i) => (
        <span key={i}>
          {p}
          {i < paths.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
