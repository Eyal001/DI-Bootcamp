import "../App.css";

const ImageCard = ({ src, key }) => {
  return (
    <div key={key} className="image-card">
      <img src={src} />
    </div>
  );
};
export default ImageCard;
