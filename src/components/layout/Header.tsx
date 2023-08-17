import React from 'react'

import {
  StyledHeader,
  HeaderContent,
  GlitchH1,
  Navigation,
  ListItem,
  ListBullet,
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
          <ListBullet />
          <a href='#about'>About</a>
        </ListItem>
        <ListItem>
          <ListBullet />
          <a href='#experience'>Experience</a>
        </ListItem>
        <ListItem>
          <ListBullet />
          <a href='#projects'>Projects</a>
        </ListItem>
        <ListItem>
          <ListBullet />
          <a href='#contact'>Contact</a>
        </ListItem>
      </Navigation>
    </StyledHeader>
  )
}

export default Header
