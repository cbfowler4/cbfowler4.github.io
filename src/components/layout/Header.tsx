import React from 'react'

import { StyledHeader, HeaderContent, GlitchH1 } from './styled/Header.styled'

const NAME = 'Bryan Fowler'
const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <GlitchH1 data-text={NAME}>{NAME}</GlitchH1>
        <h2>Full Stack Engineer</h2>
        <p>
          I build scalable & secure full stack apps. I specialize in taking
          products from 0 to 1.
        </p>
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header
