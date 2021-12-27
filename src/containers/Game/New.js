import React, { useState } from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import PreGame from "./PreGame";

import Board from "../../components/Board";
import ButtonGrid from "../../components/ButtonGrid";
import SecondStyleButton from "../../components/SecondStyleButton";

const New = () => {
  const { setMenuState } = useGames();
  const [usersData, setusersData] = useState(null);

  return (
    <>
      {!usersData && <PreGame handleUsersData={setusersData} />}
      {usersData && (
        <>
          <Board usersData={usersData} />
          <ButtonGrid>
            <BackToMenuButton onClick={() => setMenuState(0)}>
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
