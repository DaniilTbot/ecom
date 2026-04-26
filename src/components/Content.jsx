import TvListing from "../pages/TvListing";
import PhoneListing from "../pages/PhoneListing";
import LaptopListing from "../pages/LaptopListing";
import Cart from "../pages/Cart";

function Content({ pageType, setPageType, cart, setCart }) {
  if (pageType === "tv") {
    return <TvListing cart={cart} setCart={setCart} />;
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

  return <h1>Страница не найдена</h1>;
}

export default Content;
