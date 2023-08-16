import React from 'react'

import Header from './Header'
import Content from './Content'
import { RootContainer } from './styled/Root.styled'

const Root = () => {
  return (
    <RootContainer>
      <Header />
      <Content />
    </RootContainer>
  )
}

export default Root
