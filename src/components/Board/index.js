import React, { useState } from "react";
import styled from "styled-components";

const calculateWinner = (gameState) => {
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
      return gameState[a];
    }
  }
  return null;
};

const Index = () => {
  const [gameState, setGameState] = useState([]);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (Key) => {
    const newGameState = gameState.slice();
    newGameState[Key] = xIsNext ? "X" : "O";
    setGameState(newGameState);
    setXisNext(!xIsNext);
  };

  const calculateDraw = () => {
    const haveWinner = calculateWinner(gameState);
    if ((gameState.length === 9) && (!haveWinner)) {
      return true;
    } return false;
  }

  const disableButton = (Key) => {
    const isKeyUsed = gameState[Key];
    const haveWinner = calculateWinner(gameState);
    const checkDraw = calculateDraw();
    if (isKeyUsed || haveWinner || checkDraw) {
      return true;
    }
    return false;
  };

  const Cel = ({ Key }) => (
    <BoardCel disabled={disableButton(Key)} onClick={() => handleClick(Key)}>
      {gameState[Key]}
    </BoardCel>
  );

  const GameStatus = () => {
    const haveWinner = calculateWinner(gameState);
    const checkDraw = calculateDraw();
    if (haveWinner) {
      return <span>Winner: {haveWinner}</span>;
    }
    if (checkDraw) {
      return <span>Draw</span>;
    }
    return <span>Next Player: {xIsNext ? "X" : "O"}</span>;
  };

  return (
    <Container>
      <GameStatus />
      <div>
        <Cel Key={0} />
        <Cel Key={1} />
        <Cel Key={2} />
      </div>
      <div>
        <Cel Key={3} />
        <Cel Key={4} />
        <Cel Key={5} />
      </div>
      <div>
        <Cel Key={6} />
        <Cel Key={7} />
        <Cel Key={8} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const BoardCel = styled.button`
  height: 120px;
  width: 120px;
  font-size: 100px;
`;

export default Index;
