import React from "react";
import logo from "../../../public/images/logo.svg";
import { Container, StyledImage, Text } from "./style";

const Footer = (): React.ReactElement => {
  return (
    <Container>
        <StyledImage src={logo} alt="Logo" width={200} height={50}/>
        <Text>Todos os direitos reservados - 2020</Text>
    </Container>
  );
};

export default Footer;
