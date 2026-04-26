import { products } from "../data/products";

function Cart({ cart, setCart, setPageType }) {
  const cartItems = products.filter((product) => cart[product.id]);

  const subtotal = cartItems.reduce((sum, product) => {
    return sum + product.price * cart[product.id];
  }, 0);

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  function increaseQuantity(productId) {
    setCart({
      ...cart,
      [productId]: cart[productId] + 1,
    });
  }

  function decreaseQuantity(productId) {
    if (cart[productId] === 1) {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
      return;
    }

    setCart({
      ...cart,
      [productId]: cart[productId] - 1,
    });
  }

  function removeItem(productId) {
    const newCart = { ...cart };
    delete newCart[productId];
    setCart(newCart);
  }

  if (cartItems.length === 0) {
    return (
      <div className="home">
        <div className="cart-page">
          <h1>Корзина пуста</h1>
          <button onClick={() => setPageType("tv")}>Продолжить покупки</button>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="cart-page">
        <h1>Корзина</h1>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((product) => {
              const quantity = cart[product.id];
              const itemTotal = product.price * quantity;

              return (
                <div key={product.id} className="cart-item">
                  <img
                    src={product.images[0]}
                    alt={product.model}
                    className="cart-item-image"
                  />

                  <div className="cart-item-info">
                    <p>{product.make}</p>
                    <h2>{product.model}</h2>
                    <p>${itemTotal.toLocaleString()}</p>
                  </div>

                  <div className="cart-item-controls">
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                  </div>

                  <button onClick={() => removeItem(product.id)}>Удалить</button>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <h2>Сумма заказа</h2>
            <p>Подытог: ${subtotal.toFixed(2)}</p>
            <p>Налог (8%): ${tax.toFixed(2)}</p>
            <p>Доставка: Рассчитывается при оформлении</p>
            <p>Итого: ${total.toFixed(2)}</p>

            <button>Перейти к оформлению</button>
            <button onClick={() => setPageType("tv")}>Назад к покупкам</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
