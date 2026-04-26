import cartIcon from "../assets/icon.svg";
import profileIcon from "../assets/icon2.svg";

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

      <div className="header-actions">
        <button
          className="header-icon-button"
          onClick={() => setPageType("cart")}
          aria-label="Открыть корзину"
        >
          <img src={cartIcon} alt="Корзина" className="header-icon-image" />
          {totalItems > 0 && <span className="header-cart-badge">{totalItems}</span>}
        </button>

        <button className="header-icon-button" aria-label="Профиль" type="button">
          <img src={profileIcon} alt="Профиль" className="header-icon-image" />
        </button>
      </div>
    </header>
  );
}

export default Header;
