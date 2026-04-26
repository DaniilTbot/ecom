import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import "./Home.css";

function PhoneListing({ cart, setCart }) {
  const phoneProducts = products.filter((product) => product.category === "phone");
  const brands = [...new Set(phoneProducts.map((product) => product.brand))];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("5000");
  const [sortType, setSortType] = useState("low-to-high");

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

  const filteredProducts = phoneProducts.filter((product) => {
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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "low-to-high") {
      return a.price - b.price;
    }

    return b.price - a.price;
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
            <p>{sortedProducts.length} товаров</p>

            <div>
              <label>Сортировка: </label>
              <select
                value={sortType}
                onChange={(event) => setSortType(event.target.value)}
              >
                <option value="low-to-high">Цена: по возрастанию</option>
                <option value="high-to-low">Цена: по убыванию</option>
              </select>
            </div>
          </div>

          <div className="products">
            {sortedProducts.map((product) => (
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
