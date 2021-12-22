import React from "react";
import styled from "styled-components";

import colors from "../../helpers/colors";

import Logo from "../Logo";
import NavLink from "./NavLink";

const index = ({ children }) => (
  <>
    <TopMenu>
      <Logo logoStyle="height: 80px; margin-right: 50px;" />
      <NavLink route="/" label="Home" />
      <NavLink route="/about" label="About" />
    </TopMenu>
    <BodyMargin>
      <Body>{children}</Body>
    </BodyMargin>
    <Footer />
  </>
);

const TopMenu = styled.div`
  display: flex;
  top: 0;
  width: 99.4%;
  height: 80px;
  background-color: ${colors.white};
  border: 3px solid ${colors.gray};
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  background-color: ${colors.backgroundColor};
  border: 3px solid ${colors.gray};
  margin: 5px;
  height: calc(97vh - 105px);
  padding: 10px;
`;

const BodyMargin = styled.div`
  width: 99.4%;
  background-color: ${colors.white};
  border: 3px solid ${colors.gray};
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 99.4%;
  height: 25px;
  background-color: ${colors.white};
  border: 3px solid ${colors.gray};
`;

export default index;
