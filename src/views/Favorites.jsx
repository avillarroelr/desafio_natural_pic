import React, { useEffect, useState } from 'react';
import { usePhotos } from '../context/PhotoContext';
import IconHeart from '../components/IconHeart';
import '../App.css';
import '../index.css';


const Favorites = () => {
  const [photos, setPhotos] = useState([]);
  const { favorites } = usePhotos();
  // Usando useEffect para las fotos favoritas 
  useEffect(() => {
    fetch('photos.json')
      .then((response) => response.json())
      .then((data) => {
        const favoritePhotos = data.photos.filter(photo => favorites.includes(photo.id));
        setPhotos(favoritePhotos);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, [favorites]); // Añadir favorites como dependencia para refrescar cuando cambie
  // Renderizando Fotos Favoritas y usando el IconHeart para señalar que fueorn marcadas
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos.map((photo) => (
          <div key={photo.id} className="photo" style={{ backgroundImage: `url(${photo.src.medium})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <IconHeart filled={true} onClick={() => {}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
