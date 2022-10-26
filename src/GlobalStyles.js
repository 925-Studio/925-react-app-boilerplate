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
    overflow: hidden;
    
    font-display: optional;
    text-rendering: optimizeSpeed;

    transition-property: background-color,
                         transform;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.25, 0, 0.5, 1);
  }

  *:focus {
    outline: none !important;
  }
`

/* Theme */
const Theme = {
  light: {
    backgroundColor: '#E0FBFC',
    textColor: '#293241',

    primaryColor: '#98C1D9',
    secondaryColor: '#293241',
    accentColor: '#EE6C4D',
  },

  dark: {
    backgroundColor: '#293241',
    textColor: '#E0FBFC',

    primaryColor: '#3D5A80',
    secondaryColor: '#E0FBFC',
    accentColor: '#EE6C4D',
  },
}

/* --------------------------------- EXPORT --------------------------------- */
export { GlobalStyles, Theme }
