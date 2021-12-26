import React from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import Board from "../../components/Board";
import ButtonGrid from "../../components/ButtonGrid";
import SecondStyleButton from "../../components/SecondStyleButton";

const New = () => {
  const { setGameState } = useGames();

  return (
    <>
      <Board />
      <ButtonGrid>
        <BackToMenuButton onClick={() => setGameState(0)}>
          Back to Menu
        </BackToMenuButton>
      </ButtonGrid>
    </>
  );
};

const BackToMenuButton = styled(SecondStyleButton)`
  width: 200px;
  margin-top: 50px;
`;

export default New;
