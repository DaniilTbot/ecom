import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const tvProducts = products.filter((product) => product.category === "tv");

  return (
    <div>
      <h1>Home Page</h1>

      {/* количество товаров */}
      <p>{tvProducts.length} products</p>

      {/* список товаров */}
      {tvProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;