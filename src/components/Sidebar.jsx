function Sidebar({
  brands,
  selectedBrand,
  setSelectedBrand,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onApplyFilters,
}) {
  return (
    <aside className="sidebar">
      <h2>Фильтры</h2>

      <div className="filter-block">
        <label>Бренд</label>
        <select
          value={selectedBrand}
          onChange={(event) => setSelectedBrand(event.target.value)}
        >
          <option value="">Все бренды</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-block">
        <label>Цена</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Мин"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
          <input
            type="number"
            placeholder="Макс"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </div>
      </div>

      <button onClick={onApplyFilters}>Применить фильтры</button>

      <div className="special-deal">
        <h3>Специальное предложение</h3>
        <p>0:59:59</p>
      </div>
    </aside>
  );
}

export default Sidebar;
