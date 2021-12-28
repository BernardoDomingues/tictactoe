import styled from "styled-components";

import { useGames } from "../../providers/game";

import colors from "../../helpers/colors";

const Cel = ({ Key }) => {
  const {
    gameState,
    calculateWinner,
    disableButton,
    handleClick,
    handleCheckedCel,
  } = useGames();
  const haveWinner = calculateWinner();
  return (
    <BoardCel
      disabled={disableButton(Key)}
      celKey={Key}
      winnerPossibilitie={haveWinner.possibilitie}
      onClick={() => handleClick(Key)}
      checked={handleCheckedCel(Key)}
    >
      {gameState[Key] ? gameState[Key] : Key}
    </BoardCel>
  );
};

const BoardCel = styled.button`
  height: 120px;
  width: 120px;
  font-size: 100px;
  cursor: pointer;
  ${(props) => {
    if (props.checked) {
      return { color: colors.font };
    }
    return { color: colors.lightGray };
  }}
  ${(props) => {
    if (
      props.celKey === props.winnerPossibilitie[0] ||
      props.celKey === props.winnerPossibilitie[1] ||
      props.celKey === props.winnerPossibilitie[2]
    ) {
      return { backgroundColor: colors.black };
    }
  }}

  :disabled {
    cursor: default;
  }

  @media screen and (max-width: 400px) {
    height: 80px;
    width: 80px;
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    height: 100px;
    width: 100px;
    font-size: 50px;
  }
`;

export default Cel;
