import styled from 'styled-components'

export const Header = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  @media only screen and (max-width: 425px) {
    margin-left: -200px;
  }
`
export const Nav = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
  & a {
    text-transform: uppercase;
    margin: 0;
    transition: 0.6s;
    padding: 1rem;
    border-bottom: solid 1px white;
    width: 100%;
    text-align: center;
  }
  & a:hover {
    //box-shadow: 0 0 20px ${props => props.theme.colors.btnShadow};
    color: #1a62cd;
    border-radius: 1rem;
    cursor: pointer;      
  }
`