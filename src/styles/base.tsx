import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Fonts } from './typography'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @page {
    margin-top: 1in;
  }
  
  body {
    ${Fonts.noto}
  }

  a {
    &,
    &:hover {
      color: black;
      text-decoration: none;
    }
  }

  span {
    display: block;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
`