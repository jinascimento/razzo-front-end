import styled from 'styled-components';
import { FaBars, FaFolder } from 'react-icons/fa';
import Colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  background: ${Colors.white};
  grid-area: sidenav;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    align-items: flex-start;
  }
`;

export const Img = styled.img`
  max-width: 60px;
  max-height: 60px;
  width: auto;
  height: auto;
  margin-left: 20px;
`;

export const MenuIcon = styled(FaBars)`
  margin-right: 10px;
  color: ${Colors.darkBlue};
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin: 0 20px;
  }
  height: 300px;
`;

export const MyDirectorButton = styled.button`
  background: ${Colors.purple};
  padding: 0.9em 1.9em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  color: ${Colors.white};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuTitle = styled.span`
  color: ${Colors.darkBlue};
  font-weight: 600;
`;

export const SubMenu = styled.div`
  font-weight: 600;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  margin-top: 20px;
`;

export const FolderIcon = styled(FaFolder)`
  margin-right: 5px;
`;
