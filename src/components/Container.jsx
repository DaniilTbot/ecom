import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import "./Container.css";

function Container() {
  const [pageType, setPageType] = useState("tv");
  const [cart, setCart] = useState({});

  return (
    <div className="container">
      <Header pageType={pageType} setPageType={setPageType} cart={cart} />

      <main>
        <Content
          pageType={pageType}
          setPageType={setPageType}
          cart={cart}
          setCart={setCart}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Container;
