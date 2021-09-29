import styled from "styled-components";

export const HeadingStyled = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.primary};
`;