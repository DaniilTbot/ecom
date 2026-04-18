function Header() {
  return (
    <header className="header">
      <div className="header-logo">TechStore</div>

      <nav className="header-nav">
        <button className="header-link active">TV</button>
        <button className="header-link">Phone</button>
        <button className="header-link">Laptop</button>
      </nav>

      <div className="header-icons">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Header;