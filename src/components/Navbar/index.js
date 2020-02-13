import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

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
  const [opened, setOpened] = useState(false);

  function openMenu() {
    setOpened(!opened);
  }

  return (
    <>
      <Container opened={opened}>
        <div className="header">
          <Img src="https://agenciarazzo.com.br/wp-content/uploads/2019/09/cropped-logo-agencia-razzo.png" />
          <MenuIcon size={18} onClick={() => openMenu()} />
        </div>
        <Menu opened={opened}>
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
        {/*<MenuIcon size={18} onClick={() => openMenu()} />*/}
      </Container>
      <ToastContainer />
    </>
  );
};

export default Header;
