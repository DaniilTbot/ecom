import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function LaptopListing({ cart, setCart }) {
  const laptopProducts = products.filter((product) => product.category === "laptop");
  const brands = [...new Set(laptopProducts.map((product) => product.brand))];

  return (
    <div className="home">
      <div className="layout">
        <Sidebar brands={brands} />

        <main className="content">
          <div className="toolbar">
            <p>{laptopProducts.length} products</p>

            <div>
              <label>Отсортировать: </label>
              <select>
                <option>Цена: По убыванию</option>
                <option>Цена: По возрастанию</option>
              </select>
            </div>
          </div>

          <div className="products">
            {laptopProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default LaptopListing;
