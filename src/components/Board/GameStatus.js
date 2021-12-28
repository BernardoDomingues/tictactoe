import styled from "styled-components";

import { useGames } from "../../providers/game";

import colors from "../../helpers/colors";

const GameStatus = () => {
  const {
    calculateWinner,
    calculateDraw,
    xIsNext,
    usersData
  } = useGames();
  const haveWinner = calculateWinner();
  const checkDraw = calculateDraw();
  if (haveWinner.winningPlayer) {
    return <Header>Winner: {haveWinner.winningPlayer}</Header>;
  }
  if (checkDraw) {
    return <Header>Draw</Header>;
  }
  return (
    <Header>
      Next Player: {xIsNext ? usersData["X"] + " (X)" : usersData["O"] + " (O)"}
    </Header>
  );
};

const Header = styled.div`
  text-align: center;
  border: 1px solid ${colors.black};
  border-radius: 5px;
  margin: 10px;
  font-family: sans-serif;
`;

export default GameStatus;
