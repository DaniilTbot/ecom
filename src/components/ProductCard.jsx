function ProductCard(props) {
  const product = props.product;

  return (
    <div>
      <h2>{product.make}</h2>
      <p>{product.model}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default ProductCard;