import "./preview.css";

const Preview = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="preview-overlay" onClick={onClose}>
      <div className="preview-content" onClick={(e) => e.stopPropagation()}>
        {item.type === "foto" ? (
          <img src={item.src} alt={item.title} />
        ) : (
          <video controls autoPlay poster={item.poster}>
            <source src={item.src} type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        )}

        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default Preview;
