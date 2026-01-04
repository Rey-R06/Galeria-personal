import { useState } from "react";
import media from "../data/media.json";
import Galeria from "../componetes/galeria/Galeria";
import BarraLateral from "../componetes/barraLateral/BarraLateral";
import "./home.css";

const Home = () => {
  const [selectedYear, setSelectedYear] = useState("all");

  // Obtener años desde el JSON
  const years = [
    ...new Set(
      media.map(item => new Date(item.date).getFullYear())
    )
  ].sort((a, b) => b - a);

  return (
    <div className="layout">
      <BarraLateral
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <main className="contenido">
        <h1>Mi Galería Personal</h1>
        <Galeria
          media={media}
          selectedYear={selectedYear}
        />
      </main>
    </div>
  );
};

export default Home;
