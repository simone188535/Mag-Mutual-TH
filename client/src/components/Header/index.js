const navItems = [
  "Get All Users",
  "Get User By Id",
  "Get User By Email",
  "Get User By Profession",
  "Get Users Between Dates",
];

function Header() {
  return (
    <>
      <section className="header">
        <h1 className="header-text">API Examples</h1>
      </section>
      <section className="nav-button">
        <ul>
          {navItems.map((item) => (
            <li>
              <button type="button">{item}</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Header;
