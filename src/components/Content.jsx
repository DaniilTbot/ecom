import Home from "../pages/Home";

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
    return <h1>Phone page</h1>;
  }

  if (pageType === "laptop") {
    return <h1>Laptop page</h1>;
  }

  if (pageType === "cart") {
    return <h1>Cart page</h1>;
  }

  return <h1>Page not found</h1>;
}

export default Content;
