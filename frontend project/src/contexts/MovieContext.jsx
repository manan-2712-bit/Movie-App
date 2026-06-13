/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";


const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

  // FIX 1: Changed to 'getItem' (singular)
  // 1. Initialize state lazily by passing a function into useState
const [favorites, setFavorites] = useState(() => {
  const storedFavs = localStorage.getItem("favorites");
  return storedFavs ? JSON.parse(storedFavs) : [];
});

// 2. Keep ONLY this useEffect to save changes whenever favorites update
useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

  const addToFavorites = (movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
  };


  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};