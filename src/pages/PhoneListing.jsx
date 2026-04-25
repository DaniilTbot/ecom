import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function PhoneListing({ cart, setCart }) {
  const phoneProducts = products.filter((product) => product.category === "phone");
  const brands = [...new Set(phoneProducts.map((product) => product.brand))];

  return (
    <div className="home">
      <div className="layout">
        <Sidebar brands={brands} />

        <main className="content">
          <div className="toolbar">
            <p>{phoneProducts.length} products</p>

            <div>
              <label>Отсортировать: </label>
              <select>
                <option>Цена: По убыванию</option>
                <option>Цена: По возрастанию</option>
              </select>
            </div>
          </div>

          <div className="products">
            {phoneProducts.map((product) => (
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

export default PhoneListing;
