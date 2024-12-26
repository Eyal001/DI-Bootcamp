import "../App.css";
import ImageCard from "./ImageCard";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
const ImageGallery = ({ images, searchTerm }) => {
  return (
    <div className="gallery">
      <h1>SnapShot</h1>
      <SearchBar />
      <Navbar />
      <h3>{searchTerm} pictures:</h3>
      <div className="image-grid">
        {images.map((image, idx) => {
          return <ImageCard src={image.src.landscape} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
