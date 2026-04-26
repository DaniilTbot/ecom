import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function Home({ cart, setCart }) {
  const tvProducts = products.filter((product) => product.category === "tv");
  const brands = [...new Set(tvProducts.map((product) => product.brand))];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("5000");

  const [appliedFilters, setAppliedFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "5000",
  });

  function applyFilters() {
    setAppliedFilters({
      brand: selectedBrand,
      minPrice,
      maxPrice,
    });
  }

  const filteredProducts = tvProducts.filter((product) => {
    const matchesBrand =
      appliedFilters.brand === "" || product.brand === appliedFilters.brand;

    const matchesMinPrice =
      appliedFilters.minPrice === "" ||
      product.price >= Number(appliedFilters.minPrice);

    const matchesMaxPrice =
      appliedFilters.maxPrice === "" ||
      product.price <= Number(appliedFilters.maxPrice);

    return matchesBrand && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="home">
      <div className="layout">
        <Sidebar
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onApplyFilters={applyFilters}
        />

        <main className="content">
          <div className="toolbar">
            <p>{filteredProducts.length} товаров</p>

            <div>
              <label>Сортировка: </label>
              <select>
                <option>Цена: по возрастанию</option>
                <option>Цена: по убыванию</option>
              </select>
            </div>
          </div>

          <div className="products">
            {filteredProducts.map((product) => (
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

export default Home;
