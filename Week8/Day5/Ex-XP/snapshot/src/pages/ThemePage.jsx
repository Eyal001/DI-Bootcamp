import { createClient } from "pexels";
import { useEffect, useState } from "react";
import ImageGallery from "../Components/ImageGallery";

const ThemePage = ({ theme }) => {
  const [images, setImages] = useState([]);
  const API_KEY = "cCLFe3UIcTp2qc0gOW7uJjgSieMAnrnMvTy5tkvZLqa0vQ4uDiL7Ra53";

  useEffect(() => {
    if (!theme) {
      console.error("Theme is undefined or invalid");
      return;
    }

    const fetchImages = async () => {
      const client = createClient(API_KEY);
      try {
        const response = await client.photos.search({
          query: theme,
          per_page: 30,
        });
        setImages(response.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(theme);
  }, [theme]);

  return <ImageGallery images={images} searchTerm={theme} />;
};

export default ThemePage;
