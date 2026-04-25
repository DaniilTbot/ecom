import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function Container() {
  const [pageType, setPageType] = useState("tv");
  const [cart, setCart] = useState({});

  return (
    <>
      <Header pageType={pageType} setPageType={setPageType} cart={cart} />
      <main>
        <Content pageType={pageType} />
      </main>
      <Footer />
    </>
  );
}

export default Container;
