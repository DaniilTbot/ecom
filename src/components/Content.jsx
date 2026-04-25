import Home from "../pages/Home";
import PhoneListing from "../pages/PhoneListing";
import LaptopListing from "../pages/LaptopListing";

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
    return <h1>Cart page</h1>;
  }

  return <h1>Page not found</h1>;
}

export default Content;
