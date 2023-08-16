import React from 'react'

import {
  StyledHeader,
  HeaderContent,
  GlitchH1,
  Navigation,
  ListItem,
} from './styled/Header.styled'
import Content from '../../theme/content'

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <GlitchH1 data-text={Content.header.title}>
          {Content.header.title}
        </GlitchH1>
        <h2>{Content.header.subheader}</h2>
        <p>{Content.header.paragraph}</p>
      </HeaderContent>
      <Navigation>
        <ListItem>
          <a href='#about'>About</a>
        </ListItem>
        <ListItem>
          <a href='#experience'>Experience</a>
        </ListItem>
        <ListItem>
          <a href='#projects'>Projects</a>
        </ListItem>
        <ListItem>
          <a href='#contact'>Contact</a>
        </ListItem>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
