import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { Fonts } from './typography'

export const GlobalStyle = createGlobalStyle`
  ${reset}

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
`