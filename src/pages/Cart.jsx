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
        <section className="cart-page cart-page-empty">
          <h1 className="cart-title">Корзина</h1>

          <div className="empty-cart-box">
            <p className="empty-cart-text">Ваша корзина пуста</p>
            <button
              className="empty-cart-button"
              onClick={() => setPageType("tv")}
              type="button"
            >
              Продолжить покупки
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="home">
      <section className="cart-page">
        <h1 className="cart-title">Корзина</h1>

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
                    <p>${itemTotal.toFixed(2)}</p>
                  </div>

                  <div className="cart-item-controls">
                    <button onClick={() => decreaseQuantity(product.id)} type="button">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)} type="button">
                      +
                    </button>
                  </div>

                  <button
                    className="cart-remove-button"
                    onClick={() => removeItem(product.id)}
                    type="button"
                  >
                    Удалить
                  </button>
                </div>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Сумма заказа</h2>
            <p>Подытог: ${subtotal.toFixed(2)}</p>
            <p>Налог (8%): ${tax.toFixed(2)}</p>
            <p>Доставка: Рассчитывается при оформлении</p>
            <p>Итого: ${total.toFixed(2)}</p>

            <button type="button">Перейти к оформлению</button>
            <button onClick={() => setPageType("tv")} type="button">
              Назад к покупкам
            </button>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Cart;
