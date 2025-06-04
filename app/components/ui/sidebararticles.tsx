import { Link, useLocation } from "@remix-run/react";
import { articles } from "app/list";

export default function SidebarArticles() {
  const location = useLocation();
  return (
    <nav className="flex flex-col gap-2">
      <Link
        to="/main"
        className={`text-green-200 text-lg font-semibold hover:text-green-400 transition ${
          location.pathname === "/main" ? "underline" : ""
        }`}
      >
        Main Page
      </Link>
      <hr className="my-2 border-green-300/20" />
      <span className="text-green-200 text-md font-semibold mb-1">Articles</span>
      {articles.map((article) => (
        <Link
          key={article.slug}
          to={`/article/${article.slug}`}
          className={`text-gray-100 hover:text-green-400 transition pl-1 ${
            location.pathname === `/article/${article.slug}` ? "underline" : ""
          }`}
        >
          {article.title}
        </Link>
      ))}
    </nav>
  );
}