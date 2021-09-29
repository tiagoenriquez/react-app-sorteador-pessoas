import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 45px;
  width: 200px;
  margin: 10px 10px 10px 10px;
  font-size: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white};
  font-family: ${(props) => props.theme.fontFamilies.primary};
  : hover {
    background-color: ${(props) => props.theme.colors.mixed};
  }
`;