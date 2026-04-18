import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import Header from "../components/Header";

function Home() {
  const tvProducts = products.filter((product) => product.category === "tv");
  const brands = [...new Set(tvProducts.map((product) => product.brand))];

  return (
    <div className="home">
      <Header />

      <div className="layout">
        <Sidebar brands={brands} />

        <main className="content">
          <div className="toolbar">
            <p>{tvProducts.length} products</p>

            <div>
              <label>Sort by: </label>
              <select>
                <option>Цена: По убыванию</option>
                <option>Цена: По возрастанию</option>
              </select>
            </div>
          </div>

          <div className="products">
            {tvProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;