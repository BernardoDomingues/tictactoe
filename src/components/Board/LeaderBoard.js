import React, { useState } from "react";
import styled from "styled-components";

import { useGames } from "../../providers/game";

import Button from "../Button";
import Modal from "../Modal";

const LeaderBoard = () => {
  const { usersData } = useGames();
  const [visibleModal, setVisibleModal] = useState(false);
  console.log(usersData);
  return (
    <>
    <LeaderBoardButton onClick={() => setVisibleModal(true)}>Leader Board</LeaderBoardButton>
    <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}title="Leader Board" >
      <BodyModal>
        <span>X Wins: </span>
        <span>{usersData.Xwins}</span>
        <br />
        <span>O Wins: </span>
        <span>{usersData.Owins}</span>
        <br />
        <span>Draws: </span>
        <span>{usersData.draws}</span>
      </BodyModal>
    </Modal>
    </>
  );
};

const LeaderBoardButton = styled(Button)`
  margin-top: 10px;
`;

const BodyModal = styled.div`
  height: 400px;
  width: 400px;
  font-family: sans-serif;
`;

export default LeaderBoard;
