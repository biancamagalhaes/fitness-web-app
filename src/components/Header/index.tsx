import React from "react";
import logo from "../../../public/images/logo.svg";
import { Container, StyledImage } from "./style";

const Header = (): React.ReactElement => {
  return (
    <Container>
      <StyledImage src={logo} alt="Logo" width={250} height={100}/>
    </Container>
  );
};
export default Header;
