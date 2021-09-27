import styled from "styled-components";
import colors from "../../util/colors";
import Image from "next/image";

export const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 4vh 2vw;
  border: solid;
  border-color: ${colors.secondLightGrey};
  margin-bottom: 10vh;

  @media (max-width: 920px) {
    padding: 4vh 4vw;
  }
`;

export const LocationsContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 10vh;

  @media (max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3vh;
  align-items: center;
`;

export const StyledImage = styled(Image)``;

export const Title = styled.h4`
  font-size: 20px;
  color: ${colors.lightGrey};
  margin-left: 1vw;
  font-weight: 500;

  @media (max-width: 920px) {
    margin-left: 3vw;
    font-size: 4vw;
    width: 80vw;
  }
`;

export const Question = styled.h1`
  font-size: 2.2vw;
  color: ${colors.lightGrey};
  border-bottom: solid;
  border-bottom-width: 0.1vh;
  width: 100%;
  padding-bottom: 2vh;
  margin-bottom: 4vh;
  border-bottom-color: ${colors.secondLightGrey};
  font-weight: 400;

  @media (max-width: 920px) {
    font-size: 8vw;
    margin-bottom: 6vh;
  }
`;

export const ContainerOption = styled.div`
  margin-bottom: 2vh;
  border-bottom: solid;
  border-bottom-width: 0.1vh;
  width: 100%;
  border-bottom-color: ${colors.secondLightGrey};
  padding-bottom: 1.5vh;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

export const Options = styled.h4`
  font-size: 20px;
  color: ${colors.lightGrey};
  margin-left: 1vw;
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 4vw;
  }
`;

export const Time = styled.h4`
  font-size: 20px;
  color: ${colors.lightGrey};
  margin-left: 1vw;
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 4vw;
  }
`;

export const ClosedLocations = styled.h4`
  font-size: 20px;
  color: ${colors.lightGrey};
  margin-left: 1vw;
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 4vw;
  }
`;

export const FindResults = styled.h4`
  font-size: 20px;
  color: ${colors.lightGrey};
  font-weight: 500;

  @media (max-width: 920px) {
    font-size: 4vw;
  }
`;

export const Button = styled.button`
  font-size: 1.2vw;
  background-color: ${(props: {color: string}) => props.color};
  color: ${colors.darkGrey};
  margin-left: 1vw;
  font-weight: 700;
  border-radius: 5px;
  width: 25vw;
  height: 6vh;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  padding: 2vh 4vw;
  border: ${(props: {color: string}) => props.color === colors.yellow ? 'none' : 'solid ' + colors.secondLightGrey + ' 0.2vw'};
  
  @media (max-width: 920px) {
    width: 60vw;
    height: 9vh;
    margin-bottom: 2vh;
    font-size: 15px;
  }
`;

export const RadioButton = styled.input`
  cursor: pointer;
  width: 2.5vw;
  height: 2.5vh;
  &:checked + span {
    border-color: ${colors.yellow};
    background-color: ${colors.yellow};
    width: 3vw;
    height: 3vw;
  }

  @media (max-width: 920px) { 
    width: 4vw;
    height: 4vh;
  }
`;

export const CheckBox = styled.input`
  cursor: pointer;
  width: 2.5vw;
  height: 2.5vh;
  color: ${colors.yellow};

  @media (max-width: 920px) { 
    width: 4vw;
    height: 4vh;
  }
`;

export const FooterQuestions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;

  @media (max-width: 920px) {
    flex-direction: column;
    margin-bottom: 5vh;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4vh;

  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;
  }
`;

