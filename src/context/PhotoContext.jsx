import React, { createContext, useState, useContext } from 'react';
// Creando contecto globar para toda la app
const PhotoContext = createContext();
// Definiendo hook personalizado para consumo
export const usePhotos = () => useContext(PhotoContext);
// Creando estado favorites vacio para almacenar id de fotos favoritas
export const PhotoProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    // Definiendo funcion para actualizar estado de favorito
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
    // Devuelve el estado de favorites dejandolo disponible para todo componente hijo en la app
    return (
        <PhotoContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </PhotoContext.Provider>
    );
};

