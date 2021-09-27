import React from "react";
import {Container, Title, Divisor, SubTitle} from "./style";

const Text = (props: {title: string, subtitle: string}): React.ReactElement => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Divisor />
      <SubTitle>{props.subtitle}</SubTitle>
    </Container>
  );
};
export default Text;
