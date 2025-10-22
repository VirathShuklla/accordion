import { useState, useEffect } from "react";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoadingMsg] = useState(false);

  async function fetchImages(geturl) {
    try {
      setLoadingMsg(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoadingMsg(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoadingMsg(false);
    }
  }

  useEffect(() => {
    // Fetch images or set default images
    if (url !== "") fetchImages();
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Message: {errorMsg}</div>;
  }

  return (
    <div>
      <h2>Image Slider Component</h2>
    </div>
  );
}
