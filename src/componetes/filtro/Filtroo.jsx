import "./filtro.css"

const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter("all")}>Todo</button>
      <button onClick={() => setFilter("foto")}>Fotos</button>
      <button onClick={() => setFilter("video")}>Videos</button>
    </div>
  );
};

export default FilterBar;
