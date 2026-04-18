import { useState } from "react";

function ProductCard(props) {
  const product = props.product;
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
  if (count > 0) {
    setCount(count - 1);
  }
}

  return (
    <div>
      <img src={product.images[0]} alt={product.model} width="200" />

      {product.isSpecialOffer === true && <p>Special Offer</p>}

      <p>{product.make}</p>
      <h2>{product.model}</h2>
      <p>${product.price}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "♥ Избранное" : "♡ Добавить в избранное"}
      </button>

      {count === 0 ? (
        <button onClick={increaseCount}>Добавить в корзину</button>
      ) : (
        <div>
          <button onClick={decreaseCount}>-</button>
          <span>{count} в корзине</span>
          <button onClick={increaseCount}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;