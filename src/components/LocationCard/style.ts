import styled from "styled-components";
import Image from 'next/image';
import colors from "../../util/colors";

export const Container = styled.div`
  margin-left: 1vw;
  margin-right: 1vw;
  padding: 2vw 2vh;
  background-color: ${colors.moreLightGrey};
  display: flex;
  flex-direction: column;
  box-shadow: -1px 0px 9px -4px rgba(0,0,0,0.75);
  margin-bottom: 4vh;

  @media (max-width: 920px) {
    padding-top: 4vh;
  }
`;

export const Opened = styled.h1`
  font-size: 15px;
  color: ${(props: {isOpened: boolean}) => props.isOpened ? colors.green : colors.red};
  margin-bottom: 1vh;

  @media (max-width: 920px) {
    font-size: 3vw;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${colors.darkGrey};
  margin-bottom: 1vh;

  @media (max-width: 920px) {
    font-size: 5vw;
  }
`;

export const Content = styled.h4`
  font-weight: 400;
  max-width: 40vw;
  font-size: 20px;
  margin-bottom: 2vh;
  color: ${colors.lightGrey};

  @media (max-width: 920px) {
    font-size: 4vw;
    max-width: 100vw;
  }
`;

export const Divisor = styled.div`
  width: 100%;
  height: 0.2vh;
  margin-top: 2vh;
  margin-bottom: 2vh;
  background-color: ${colors.secondLightGrey};
`;

export const StyledImage = styled(Image)``;

export const ContainerInformations = styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2vh;
`;

export const ContainerSchedule = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  max-width: 20vw;

  @media (max-width: 920px) {
    max-width: 100vw;
  }
`;