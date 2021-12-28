import React from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import Logo from "../../components/Logo";
import ButtonGrid from "../../components/ButtonGrid";
import Button from "../../components/Button";

import BasePage from "../../components/BasePage";
import NewGame from "../Game/New";

const Home = () => {
  const { menuState, setMenuState } = useGames();

  return (
    <BasePage>
      {menuState === 0 && (
        <>
          <LogoGrid>
            <Logo logoStyle="width: 300px;" />
          </LogoGrid>
          <ButtonGrid>
            <NewGameButton onClick={() => setMenuState(1)}>New Game</NewGameButton>
          </ButtonGrid>
        </>
      )}
      {menuState === 1 && (<NewGame />)}
    </BasePage>
  );
};

const LogoGrid = styled.div`
  text-align: center;
  margin-bottom: 100px;
`;

const NewGameButton = styled(Button)`
  width: 200px;
`;

export default Home;
