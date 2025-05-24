import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteTools, setFavoriteTools] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
    setFavoriteTools(favorites);
  }, []);

  const updateFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("FavoriteTools") || "[]");
    setFavoriteTools(favorites);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteTools, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}