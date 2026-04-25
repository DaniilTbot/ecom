function Header({ pageType, setPageType, cart }) {
  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <header className="header">
      <button className="header-logo" onClick={() => setPageType("tv")}>
        TechStore
      </button>

      <nav className="header-nav">
        <button
          className={pageType === "tv" ? "header-link active" : "header-link"}
          onClick={() => setPageType("tv")}
        >
          TV
        </button>

        <button
          className={pageType === "phone" ? "header-link active" : "header-link"}
          onClick={() => setPageType("phone")}
        >
          Phone
        </button>

        <button
          className={pageType === "laptop" ? "header-link active" : "header-link"}
          onClick={() => setPageType("laptop")}
        >
          Laptop
        </button>
      </nav>

      <div className="header-icons">
        <button onClick={() => setPageType("cart")}>
          🛒 {totalItems}
        </button>

        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;
