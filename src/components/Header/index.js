import React from 'react'
import { Container, Content, StyledLink, Title } from './styledComponents'

const Header = ({ siteTitle }) => (
  <Container>
    <Content>
      <Title>
        <StyledLink to="/" >{siteTitle}</StyledLink>
      </Title>
    </Content>
  </Container>
)

export default Header
