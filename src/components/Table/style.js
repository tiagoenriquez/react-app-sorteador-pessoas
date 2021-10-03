import styled from 'styled-components';

export const TableStyled = styled.table`
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.dark};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fontFamilies.primary};
  margin: 10px 10px 10px 10px;
`;

export const RowStyled = styled.td`
  border: 0;
  height: 40px;
  padding: 0px 10px 0px 10px;
`;