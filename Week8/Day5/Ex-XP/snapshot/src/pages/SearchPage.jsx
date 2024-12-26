import { createClient } from "pexels";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "../Components/ImageGallery";

const SearchPage = () => {
  const { query } = useParams();
  const [images, setImages] = useState([]);
  const API_KEY = "cCLFe3UIcTp2qc0gOW7uJjgSieMAnrnMvTy5tkvZLqa0vQ4uDiL7Ra53";

  useEffect(() => {
    const fetchImages = async () => {
      const client = createClient(API_KEY);
      try {
        const response = await client.photos.search({
          query,
          per_page: 30,
        });
        setImages(response.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query]);

  return <ImageGallery images={images} searchTerm={query} />;
};

export default SearchPage;
