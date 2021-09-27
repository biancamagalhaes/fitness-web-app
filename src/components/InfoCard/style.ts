import styled from "styled-components";
import Image from 'next/image';
import colors from "../../util/colors";

export const Container = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  padding: 5vw 5vh;
  background-color: ${colors.moreLightGrey};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 80vw;
  margin-bottom: 10vh;
  box-shadow: -1px 0px 9px -4px rgba(0,0,0,0.75);

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1vw;
  margin-right: 1vw;

  @media (max-width: 920px) {
    margin-bottom: 10vh;
  }
`;

export const Topic = styled.h1`
  font-size: 18px;
  color: ${colors.black};
  margin-bottom: 3vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.2vw;
  margin-right: 0.2vw;
`;

export const StyledImage = styled(Image)``;

export const Label = styled.h4`
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  @media (max-width: 920px) {
    font-size: 2vh;
  }
`;