import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Navbar';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
