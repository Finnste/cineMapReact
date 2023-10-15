import { createGlobalStyle } from "styled-components";
import PIN from "../../static/fonts/HussarBoldWeb-bf92.woff";

const FontStyles = createGlobalStyle`
  * { 
    @font-face {
    font-family: PINUP;
    src: url(${PIN}) format('woff');
      }
    }

  body {
  background-color: grey;
  margin: 0;
  background: #dadada;
  border: 1px solid red;
  }
  `;

export default FontStyles;
