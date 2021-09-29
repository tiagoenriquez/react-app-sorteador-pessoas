import styled from "styled-components";

export const SpinbuttonStyled = styled.input`
  height: 40px;
  width: 250px;
  margin: 10px 10px 10px 10px;
  font-size: 15px;
  placeholder-color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.fontFamilies.primary};
  : hover {
    background-color: ${(props) => props.theme.colors.soft};
  }
`;