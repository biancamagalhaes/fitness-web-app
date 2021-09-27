import styled from "styled-components";
import colors from "../../util/colors";
import Image from 'next/image'

export const Container = styled.div`
  background-color: ${colors.black};
  justify-content: center;
  width: 100%;
  height: 50%;
  display: flex;
  padding: 30px;
`;

export const StyledImage = styled(Image)`
  width: 30px;
  height: 40px;
`
