import styled from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 100vw;
`;