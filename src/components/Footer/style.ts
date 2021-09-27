import styled from "styled-components";
import colors from "../../util/colors";
import Image from 'next/image';

export const Container = styled.div`
  background-color: ${colors.darkGrey};
  justify-content: center;
  flex-direction: column;
  align-items: cente;
  width: 100%;
  height: 50%;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const StyledImage = styled(Image)``

export const Text = styled.h4`
  color: ${colors.lightGrey};
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;