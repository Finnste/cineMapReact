import { createGlobalStyle } from "styled-components";
import PIN from "../../static/fonts/HussarBoldWeb-bf92.woff";

const FontStyles = createGlobalStyle`
  * { 
    @font-face {
    font-family: PINUP;
    src: url(${PIN}) format('woff');
      }
    -ms-overflow-style: none;
  }
  
    ::-webkit-scrollbar {
    display: none;
  }

  body {
  margin: 0;
  overflow: hidden;
  }

  .title  {
    font-family: PINUP;
    font-size: 5em;
    text-align: center;
  };

  `;

export default FontStyles;
