import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding-top: 10px;
  background: ${Colors.white};
  grid-area: sidenav;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 768px) {
    flex-direction: column;
    height: 100%;
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
  color: ${Colors.darkBlue};
  @media (min-width: 768px) {
    display: none;
  }

`;
