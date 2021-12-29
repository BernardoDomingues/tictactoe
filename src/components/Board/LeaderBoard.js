import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../helpers/colors";

import { useGames } from "../../providers/game";

import Button from "../Button";
import Modal from "../Modal";

const LeaderBoard = () => {
  const { usersData } = useGames();
  const [visibleModal, setVisibleModal] = useState(false);
  console.log(usersData);
  return (
    <>
      <LeaderBoardButton onClick={() => setVisibleModal(true)}>
        Leader Board
      </LeaderBoardButton>
      <Modal
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
        title="Leader Board"
      >
        <BodyModal>
          <XGrid>
            <TopGrid>X</TopGrid>
            <span>{usersData.Xwins}</span>
          </XGrid>
          <div>
            <TopGrid>Draws</TopGrid>
            <span>{usersData.draws}</span>
          </div>
          <YGrid>
            <TopGrid>O</TopGrid>
            <span>{usersData.Owins}</span>
          </YGrid>
        </BodyModal>
      </Modal>
    </>
  );
};

const LeaderBoardButton = styled(Button)`
  margin-top: 10px;
`;

const BodyModal = styled.div`
  height: 130px;
  width: 400px;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  color: ${colors.font};
  font-size: 35px;
  padding: 10px;
`;

const XGrid = styled.div`
  border-right: 1px solid ${colors.black};
`;

const YGrid = styled.div`
  border-left: 1px solid ${colors.black};
`;

const TopGrid = styled.div`
  border-bottom: 1px solid ${colors.black};
  margin-bottom: 10px;
  padding: 5px;
`;

export default LeaderBoard;
