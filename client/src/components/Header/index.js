import { Link, useLocation } from "react-router-dom";

const navItems = [
  { link: "/users", btnText: "Get All Users" },
  { link: "/users/1", btnText: "Get User By Id" },
  { link: "/users/email", btnText: "Get User By Email" },
  { link: "/users/profession", btnText: "Get User By Profession" },
  { link: "/users/date", btnText: "Get Users Between Dates" },
];

function Header() {
  const location = useLocation();

  return (
    <>
      <nav className="nav">
        <section className="header">
          <h1 className="header-text">API Examples</h1>
        </section>
        <section className="nav-items">
          {navItems.map((item) => (
            <button
              type="button"
              className={`nav-item ${
                location.pathname === item.link ? "active" : ""
              }`}
            >
              <Link to={item.link} className="nav-link">
                {item.btnText}
              </Link>
            </button>
          ))}
        </section>
      </nav>
    </>
  );
}

export default Header;
