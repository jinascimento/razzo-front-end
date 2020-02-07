import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  padding-top: 10px;
  background: #ffffff;
  grid-area: sidenav;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const Img = styled.img`
  max-width: 70px;
  max-height: 70px;
  width: auto;
  height: auto;
  margin-left: 10px;
`;

export const MenuIcon = styled(FaBars)`
  margin-right: 10px;
  color: rgba(176, 177, 187, 1);
  @media (min-width: 768px) {
    display: none;
  }

`;
