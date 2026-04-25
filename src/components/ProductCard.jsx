import "./ProductCard.css";
import { useState } from "react";

import heartFilled from "../assets/heart1.svg";
import heartEmpty from "../assets/heart2.svg";

function ProductCard({ product, cart, setCart }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const count = cart[product.id] || 0;

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  function increaseCount() {
    setCart({
      ...cart,
      [product.id]: count + 1,
    });
  }

  function decreaseCount() {
    if (count === 1) {
      const newCart = { ...cart };
      delete newCart[product.id];
      setCart(newCart);
      return;
    }

    setCart({
      ...cart,
      [product.id]: count - 1,
    });
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
      <div className="card-image-wrapper">
        <img
          src={product.images[currentImage]}
          alt={product.model}
          className="card-image"
        />

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

      <p>{product.make}</p>
      <h2>{product.model}</h2>

      <p className="card-price">${product.price.toLocaleString()}</p>

      {count === 0 ? (
        <button className="add-to-cart-button" onClick={increaseCount}>
          Add to Cart
        </button>
      ) : (
        <div className="cart-controls">
          <button className="cart-minus-button" onClick={decreaseCount}>
            -
          </button>
          <span className="cart-count">{count} in cart</span>
          <button className="cart-plus-button" onClick={increaseCount}>
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
