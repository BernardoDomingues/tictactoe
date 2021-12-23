import React, { useState } from "react";
import styled from "styled-components";

const Index = () => {
  const [gameState, setGameState] = useState([]);
  const [xIsNext, setXisNext] = useState(true);

  const handleClick = (Key) => {
    const newGameState = gameState.slice();
    newGameState[Key] = xIsNext ? "X" : "O";
    setGameState(newGameState);
    setXisNext(!xIsNext);
  };

  const Cel = ({ Key }) => <BoardCel onClick={() => handleClick(Key)}>{gameState[Key]}</BoardCel>;

  const nextPlayer = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <Container>
      <span>{nextPlayer}</span>
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
