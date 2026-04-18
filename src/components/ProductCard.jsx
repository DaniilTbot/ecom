import "./ProductCard.css";
import { useState } from "react";

function ProductCard(props) {
  const product = props.product;
  const [isFavorite, setIsFavorite] = useState(false);
  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

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

  function nextImage() {
    if (currentImage < product.images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  }

  function prevImage() {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <div className="card">
      <img
        src={product.images[currentImage]}
        alt={product.model}
        width="200"
      />

      {product.images.length > 1 && (
        <div>
          <button onClick={prevImage}>←</button>
          <span>
            {currentImage + 1} / {product.images.length}
          </span>
          <button onClick={nextImage}>→</button>
        </div>
      )}

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