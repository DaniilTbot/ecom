import { useState } from "react";

function ProductCard(props) {
  const product = props.product;
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div>
      <img src={product.images[0]} alt={product.model} width="200" />

      {product.isSpecialOffer === true && <p>Special Offer</p>}

      <p>{product.make}</p>
      <h2>{product.model}</h2>
      <p>${product.price}</p>

      <button onClick={toggleFavorite}>
        {isFavorite ? "♥ In Favorites" : "♡ Add to Favorites"}
      </button>
    </div>
  );
}

export default ProductCard;