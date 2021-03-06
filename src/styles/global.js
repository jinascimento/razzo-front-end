import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }  
  
  body {
    background: ${Colors.lightBlue};
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input, button {
    font: 12px Roboto, sans-serif;
  }

  @media (max-width: 640px) {
      #root {
          margin: 0 auto;
          padding: 0 0 50px;
          display: grid;
          /*grid-template-columns: repeat(1, 1fr);*/
          grid-template-areas:
                  "sidenav"
                  "main";
                  //"aside"
                  //"footer";
      }

      sidenav {
          height: 10vh;
          display: block;
      }
  }
  
  @media (min-width: 768px) {
      #root {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-areas:
                  "sidenav main main main";
          height: 100vh;
      }

  }
  
  button {
    cursor: pointer;
  }
  
  svg {
    cursor: pointer;
  }
`;
