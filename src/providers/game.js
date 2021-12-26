import React, { useState } from "react";

export const GamesContext = React.createContext({});

export const GamesProvider = ({ children }) => {
  const [gameState, setGameState] = useState(0);

  return (
    <GamesContext.Provider
      value={{
        gameState,
        setGameState
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => React.useContext(GamesContext);
