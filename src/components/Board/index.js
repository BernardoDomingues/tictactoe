import React from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import Cel from "./Cel";
import GameStatus from "./GameStatus";
import SecondStyleButton from "../SecondStyleButton";

const Board = () => {
  const { handleReset } = useGames();

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
      <ResetButton onClick={() => handleReset()}>Restart</ResetButton>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const ResetButton = styled(SecondStyleButton)`
  margin-top: 10px;
  border: 1px solid red;
  color: red;
`;

export default Board;
