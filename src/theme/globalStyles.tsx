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
  padding: 0 96px;
}

#root {
  min-height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.size}
}

h2 {
  font-weight: ${({ theme }) => theme.typography.subHeaderWeight};
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyle
