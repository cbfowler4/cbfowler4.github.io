import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

export const ListItem = styled.li`
  font-weight: ${(props) => props.theme.typography.subHeaderWeight};
  margin: 0.5rem 0;

  &:hover {
    opacity: 0.7;
  }
`
