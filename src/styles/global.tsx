import {createGlobalStyle} from 'styled-components'
import fundo from '../assets/images/fundo.png'
/*
rgb(15,15,15)
rgb(0,112,168)
rgb(4,71,178)
rgb(158,193,244)
rgb(24,24,24)
rgb(194,222,255)
rgb(0,122,205)
rgb(34,34,34)
*/

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body,html {
    height: 100%;
    background-image: url(${fundo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: rgb(255, 255, 255);
    @media only screen and (max-width: 1000px) {
      //height: 100vh;
    }
  }
`