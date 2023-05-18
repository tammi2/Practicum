
import React, { useState, useEffect } from 'react';
import Loading from './Loding';
import './ImageList'

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <button disabled={isLoading} onClick={fetchImages}>
          הצג תמונות
        </button>
        {isLoading ? <div> <h1>הטעינה מתבצעת...</h1></div> : null}
        {error ? <div>שגיאה: {error}</div> : null}
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.thumbnailUrl} alt={image.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

 export default ImageList;






