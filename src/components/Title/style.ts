import styled from "styled-components";
import colors from "../../util/colors";

export const Container =  styled.div`
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  max-width: 20vw;

  @media (max-width: 920px) {
    font-size: 8vw;
    max-width: 100vw;
  }
`;

export const Divisor = styled.div`
  background-color: ${colors.black};
  width: 7vw;
  height: 1vh;
  margin-top: 3vh;
  margin-bottom: 3vh;
`

export const SubTitle = styled.h4`
  font-size: 1.35vw;;
  color: ${colors.lightGrey};
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 3.5vw;
    max-width: 100vw;
  }
`;