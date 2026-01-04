import "./card.css"

const Card = ({ item, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(item)}>
      {item.type === "foto" ? (
        <img src={item.src} alt={item.nombre} />
      ) : (
        <video>
          <source src={item.src} type="video/mp4" />
        </video>
      )}
      <h4>{item.nombre}</h4>
    </div>
  );
};

export default Card;
