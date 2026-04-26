import Home from "../pages/Home";
import PhoneListing from "../pages/PhoneListing";
import LaptopListing from "../pages/LaptopListing";
import Cart from "../pages/Cart";

function Content({ pageType, setPageType, cart, setCart }) {
  if (pageType === "tv") {
    return (
      <Home
        pageType={pageType}
        setPageType={setPageType}
        cart={cart}
        setCart={setCart}
      />
    );
  }

  if (pageType === "phone") {
    return <PhoneListing cart={cart} setCart={setCart} />;
  }

  if (pageType === "laptop") {
    return <LaptopListing cart={cart} setCart={setCart} />;
  }

  if (pageType === "cart") {
    return (
      <Cart
        cart={cart}
        setCart={setCart}
        setPageType={setPageType}
      />
    );
  }

  return <h1>Page not found</h1>;
}

export default Content;
