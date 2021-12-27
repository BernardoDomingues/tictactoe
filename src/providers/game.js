import React, { useState } from "react";

export const GamesContext = React.createContext({});

export const GamesProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(0);

  return (
    <GamesContext.Provider
      value={{
        menuState,
        setMenuState
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => React.useContext(GamesContext);
