import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layout.majorPadding};
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 23rem;

  h1 {
    font-family: 'Bungee', cursive;
  }
  h2 {
    margin: 12px 0;
  }
`

export const GlitchH1 = styled.h1`
  position: relative;
  font-size: 3rem;
  letter-spacing: 0.35rem;

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-shadow: -3px 0 #cb6ce6;
  }

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-shadow: 3px 0 #5ce1e6;
  }
`
