function Sidebar(props) {
  const brands = props.brands;

  return (
    <aside className="sidebar">
      <h2>Фильтры</h2>

      <div className="filter-block">
        <label>Бренд</label>
        <select>
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
            <input type="number" placeholder="Мин" />
            <input type="number" placeholder="Макс" />
        </div>
        
      </div>

      <button>Применить фильтры</button>

      <div className="special-deal">
        <h3>Special Deal</h3>
        <p>0:59:59</p>
      </div>
    </aside>
  );
}

export default Sidebar;