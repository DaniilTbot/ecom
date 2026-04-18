function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>About</h3>
          <p>Современный магазин техники для дома и работы.</p>
          <p>Лучшие предложения на телевизоры, телефоны и ноутбуки.</p>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Ваш email" />
            <button>Подписаться</button>
          </div>
        </div>
      </div>

      <p className="footer-copy">© 2026 TechStore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;