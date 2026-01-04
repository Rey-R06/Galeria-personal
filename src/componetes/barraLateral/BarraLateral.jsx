import "./barraLateral.css";

const BarraLateral = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <aside className="barra-years">
      <h3>Años</h3>

      <ul>
        <li
          className={selectedYear === "all" ? "activo" : ""}
          onClick={() => setSelectedYear("all")}
        >
          Todos
        </li>

        {years.map(year => (
          <li
            key={year}
            className={
              Number(selectedYear) === year ? "activo" : ""
            }
            onClick={() => setSelectedYear(Number(year))}
          >
            {year}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BarraLateral;
