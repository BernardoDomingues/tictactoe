import React from "react";
import styled from "styled-components";
import LogoImage from "../assets/logo.png";

const Logo = ({ logoStyle }) => (
  <Image src={LogoImage} alt="project logo" logoStyle={logoStyle} />
);

const Image = styled.img`
  ${(props) => props.logoStyle};
`;

export default Logo;
