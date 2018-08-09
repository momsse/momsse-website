import { injectGlobal } from 'styled-components'
import fonts from '../assets/fonts';

injectGlobal`
  @font-face {
    font-family: 'MuseoSans';
    src: url(${fonts.MuseoSans});
  }

  html, body {
    height:100%;
  }

  body {
    margin: 0;
    font-family: 'MuseoSans';
  }

  @page { size: auto;  margin: 0mm; }

`
