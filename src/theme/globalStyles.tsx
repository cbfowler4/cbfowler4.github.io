import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html {
  height: -webkit-fill-available;
}

body {
  background: ${(props) => props.theme.colors.background};

  font-family: ${(props) => props.theme.typography.family};
  font-weight: ${(props) => props.theme.typography.weight};
  color: ${(props) => props.theme.colors.primary};
}

* {
  margin: 0;
  padding: 0;
}

h2 {
  font-weight: ${({ theme }) => theme.typography.subHeaderWeight};
}
`

export default GlobalStyle
