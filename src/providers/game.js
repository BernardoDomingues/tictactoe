import React, { useState } from "react";

export const GamesContext = React.createContext({});

export const GamesProvider = ({ children }) => {
  const [menuState, setMenuState] = useState(0);
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [usersData, setUsersData] = useState(null);

  const calculateWinner = () => {
    const winningPossibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPossibilities.length; i++) {
      const [a, b, c] = winningPossibilities[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return {
          winningPlayer: usersData[gameState[a]] + ` (${gameState[a]})`,
          possibilitie: winningPossibilities[i],
        };
      }
    }
    return { winningPlayer: null, possibilitie: [null, null, null] };
  };

  const handleClick = (Key) => {
    const newGameState = gameState.slice();
    newGameState[Key] = xIsNext ? "X" : "O";
    setGameState(newGameState);
    setXisNext(!xIsNext);
  };

  const calculateDraw = () => {
    const haveWinner = calculateWinner(gameState);
    for (let i = 0; i < gameState.length; i++) {
      if (!gameState[i] || haveWinner.winningPlayer) {
        return false;
      }
    }
    return true;
  };

  const disableButton = (Key) => {
    const isKeyUsed = gameState[Key];
    const haveWinner = calculateWinner(gameState);
    if (isKeyUsed || haveWinner.winningPlayer) {
      return true;
    }
    return false;
  };

  const handleReset = () => {
    setGameState(Array(9).fill(null));
    setXisNext(true);
  };

  const handleCheckedCel = (Key) => {
    const isKeyUsed = gameState[Key];
    const haveWinner = calculateWinner(gameState);
    if (isKeyUsed && !haveWinner.winningPlayer) {
      return true;
    }
    return false;
  };

  const backToMenu = () => {
    setUsersData(null);
    setXisNext(true);
    setGameState(Array(9).fill(null));
    setMenuState(0);
  };

  return (
    <GamesContext.Provider
      value={{
        menuState,
        setMenuState,
        gameState,
        setGameState,
        xIsNext,
        setXisNext,
        usersData,
        setUsersData,
        calculateWinner,
        handleClick,
        calculateDraw,
        disableButton,
        handleReset,
        handleCheckedCel,
        backToMenu,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => React.useContext(GamesContext);
