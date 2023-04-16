import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`

export const UserMenuBtn = styled.button`
  padding: 4px 12px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 12px;
  background-color: rgba(125, 131, 140, 0.24);
  color: white;
  font-size: 18px;
  font-weight: 500;
  text-shadow: rgb(10, 0, 0) 1px 1px 2px, rgb(122, 123, 134) 0px 0px 1em, rgb(183 172 182) 0px 0px 0.2em;
  transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: rgba(125, 131, 140, 0.76);
  }
`;