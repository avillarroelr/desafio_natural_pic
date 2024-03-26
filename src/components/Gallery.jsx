import React, { useEffect, useState } from 'react';

import '../App.css';
import '../index.css';


const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Cargar las imágenes desde photos.json
    fetch('photos.json')
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.src.medium} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
