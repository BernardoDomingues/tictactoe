import styled from "styled-components";
import colors from "../helpers/colors";

const Button = styled.button`
  border: 0;
  margin: 0;
  background: ${colors.black};
  font-weight: 900;
  color:  ${colors.white};
  height: 40px;
  border-radius: 5px;
  transition: 0.3s;
  opacity: 1;
  cursor: pointer;

  :hover{
    opacity: 0.8;
  };

  :disabled {
    background-color: ${colors.gray};
    color: ${colors.font};
    opacity: 10;
    cursor: default;
    border: 1px solid ${colors.font};
  }
`;

export default Button;
