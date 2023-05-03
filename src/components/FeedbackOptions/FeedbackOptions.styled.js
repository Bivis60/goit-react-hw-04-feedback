import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.buttonColor};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  cursor: pointer;
`;
