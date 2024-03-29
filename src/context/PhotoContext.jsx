// src/context/PhotoContext.jsx
import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

export const usePhotos = () => useContext(PhotoContext);

export const PhotoProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(photoId);
      if (isFavorite) {
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId];
      }
    });
  };

  return (
    <PhotoContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </PhotoContext.Provider>
  );
};
