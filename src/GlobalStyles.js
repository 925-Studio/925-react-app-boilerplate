/* --------------------------------- IMPORT --------------------------------- */
import { createGlobalStyle } from 'styled-components'

/* --------------------------- ANIMATIONS & STYLES -------------------------- */
/* Global Styles */
const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    
    font-display: optional;
    text-rendering: optimizeSpeed;
  }

  *:focus {
    outline: none !important;
  }
`

/* Theme */
const Theme = {
  light: {
    color: {
      background: '#e0fbfc',
      text: '#293241',

      primary: '#98c1d9',
      secondary: '',
      accent: '#ee6c4d',
      warning: '',
    },
  },

  dark: {
    color: {
      background: '#293241',
      text: '#e0fbfc',

      primary: '#3d5a80',
      secondary: '',
      accent: '#ee6c4d',
      warning: '',
    },
  },
}

/* --------------------------------- EXPORT --------------------------------- */
export { GlobalStyles, Theme }
