import React, { createContext, useState } from 'react';

// Create the context
export const TrophyContext = createContext();

// Create a provider component
export const TrophyProvider = ({ children }) => {
  const [trophies, setTrophies] = useState([]);

  const addTrophy = (newTrophy) => {
    setTrophies((prevTrophies) => [...prevTrophies, newTrophy]);
  };

  return (
    <TrophyContext.Provider value={{ trophies, addTrophy }}>
      {children}
    </TrophyContext.Provider>
  );
};