import "./ProductCard.css";
import { useState } from "react";

import heartFilled from "../assets/heart1.svg";
import heartEmpty from "../assets/heart2.svg";

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
      {/* КАРТИНКА */}
      <div className="card-image-wrapper">
        <img
          src={product.images[currentImage]}
          alt={product.model}
          className="card-image"
        />

        {/* ❤️ ИЗБРАННОЕ */}
        <button
          className={
            isFavorite
              ? "favorite-button favorite-active"
              : "favorite-button"
          }
          onClick={toggleFavorite}
        >
          <img
            src={isFavorite ? heartFilled : heartEmpty}
            alt="favorite"
            className="favorite-icon"
          />
        </button>

        {/* СЛАЙДЕР */}
        {product.images.length > 1 && (
          <>
            <button
              className="slider-button slider-button-left"
              onClick={prevImage}
            >
              ←
            </button>

            <button
              className="slider-button slider-button-right"
              onClick={nextImage}
            >
              →
            </button>

            {/* ТОЧКИ */}
            <div className="slider-indicators">
              {product.images.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === currentImage
                      ? "slider-dot slider-dot-active"
                      : "slider-dot"
                  }
                ></span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* SPECIAL OFFER */}
      {product.isSpecialOffer === true && <p>Special Offer</p>}

      {/* ТЕКСТ */}
      <p>{product.make}</p>
      <h2>{product.model}</h2>

      <p className="card-price">
        ${product.price.toLocaleString()}
      </p>

      {/* КОРЗИНА */}
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