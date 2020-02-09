import React from 'react';
import {
  Container,
  Img,
  MenuIcon,
  FolderIcon,
  Menu,
  MyDirectorButton,
  MenuTitle,
  MenuBox,
  SubMenu,
} from './style';

const Header = () => {
  return (
    <Container>
      <Img src="https://agenciarazzo.com.br/wp-content/uploads/2019/09/cropped-logo-agencia-razzo.png" />
      <Menu>
        <MenuBox>
          <MyDirectorButton>
            <FolderIcon size={16} /> Meu diretório
          </MyDirectorButton>
        </MenuBox>
        <MenuBox>
          <MenuTitle>ARQUIVOS</MenuTitle>
          <SubMenu>
            <br />
            <p>Meus artigos</p>
            <br />
            <p>Compartilhados</p>
            <br />
            <p>Lixeira</p>
          </SubMenu>
        </MenuBox>
        <MenuBox>
          <MenuTitle>CATEGORIAS</MenuTitle>
          <SubMenu>
            <br />
            <p>Sem categoria</p>
            <br />
            <p>Desenvolvimento Mobile</p>
            <br />
            <p>Ti</p>
            <br />
            <p>Design</p>
            <br />
            <p>Desenvolvimento Web</p>
          </SubMenu>
        </MenuBox>
      </Menu>
      <MenuIcon size={18} />
    </Container>
  );
};

export default Header;
