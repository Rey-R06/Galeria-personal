import "./preview.css"

const Preview = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-contenido" onClick={e => e.stopPropagation()}>
        {item.type === "foto" ? (
          <img src={item.src} alt={item.title} />
        ) : (
          <video controls>
            <source src={item.src} type="video/mp4" />
          </video>
        )}
        <h3>{item.nombre}</h3>
        <p>{item.date}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default Preview;
