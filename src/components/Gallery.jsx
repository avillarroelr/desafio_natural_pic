import React, { useEffect, useState } from 'react';
import { usePhotos } from '../context/PhotoContext'; // Asegúrate de tener esta importación
import IconHeart from './IconHeart';
import '../App.css';
import '../index.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const { favorites, toggleFavorite } = usePhotos();

  useEffect(() => {
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
        <div key={photo.id} className="photo" style={{ backgroundImage: `url(${photo.src.medium})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <IconHeart filled={favorites.includes(photo.id)} onClick={() => toggleFavorite(photo.id)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;


