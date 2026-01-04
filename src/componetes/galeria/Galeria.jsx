import { useState } from "react";
import "./galeria.css";
import Card from "../card/Card";
import Filtro from "../filtro/Filtroo";
import Preview from "../preview/Preview";

const Galeria = ({ media, selectedYear }) => {
  const [filter, setFilter] = useState("todo");
  const [selectedItem, setSelectedItem] = useState(null);

  // 1️⃣ Filtrar por año usando slice.
  // el slice es por que al agarrar la fecha la agarraba completa entonces con el slice solo agarra el año
  const mediaPorAño =
    selectedYear === "all"
      ? media
      : media.filter(
          item => item.date.slice(0, 4) === String(selectedYear)
        );

  // 2️⃣ Filtrar por tipo
  const mediaFiltrada =
    filter === "all"
      ? mediaPorAño
      : mediaPorAño.filter(item => item.type === filter);

  return (
    <>
      <Filtro setFilter={setFilter} />

      <div className="gallery">
        {mediaFiltrada.map(item => (
          <Card
            key={item.id}
            item={item}
            onSelect={setSelectedItem}
          />
        ))}
      </div>

      <Preview
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
};

export default Galeria;
