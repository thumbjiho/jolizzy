import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "wedding", path: "/wedding" },
  { label: "games", path: "/games" },
  { label: "about us", path: "/about-us" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar fixed">
      <h1 className="logo">JOLIZZY.US</h1>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "nav-item active" : "nav-item"}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


// Apply global styles
document.body.style.backgroundColor = "#cccccc";
