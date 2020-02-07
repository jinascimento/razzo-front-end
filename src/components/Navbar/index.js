import React from 'react';
import { Container, Img, MenuIcon } from './style';

const Header = () => {
  return (
    <Container>
      <h1>
        <Img src="https://agenciarazzo.com.br/wp-content/uploads/2019/09/cropped-logo-agencia-razzo.png" />
      </h1>
      <div>
        <MenuIcon size={18} />
      </div>
    </Container>
  );
};

export default Header;
