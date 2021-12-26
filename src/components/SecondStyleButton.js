import styled from "styled-components";
import Button from "./Button";

import colors from "../helpers/colors";

const SecondStyleButton = styled(Button)`
  background-color: ${colors.backgroundColor};
  color: ${colors.black};
  border: 1px solid ${colors.black};
`;

export default SecondStyleButton;
