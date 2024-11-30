import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <Link
            aria-current="page"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            to="/about"
          >
            About
          </Link>
          <Link
            className={`nav-link ${isActive("/newsletter") ? "active" : ""}`}
            to="/newsletter"
          >
            Newsletter
          </Link>
        </div>
      </div>
    </nav>
  );
};
