import React from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import PreGame from "./PreGame";

import Board from "../../components/Board";
import ButtonGrid from "../../components/ButtonGrid";
import SecondStyleButton from "../../components/SecondStyleButton";

const New = () => {
  const { usersData, backToMenu } = useGames();

  return (
    <>
      {!usersData && <PreGame />}
      {usersData && (
        <>
          <Board />
          <ButtonGrid>
            <BackToMenuButton onClick={() => backToMenu()}>
              Back to Menu
            </BackToMenuButton>
          </ButtonGrid>
        </>
      )}
    </>
  );
};

const BackToMenuButton = styled(SecondStyleButton)`
  width: 200px;
  margin-top: 50px;
`;

export default New;
