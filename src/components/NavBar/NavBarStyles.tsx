import styled from 'styled-components'

export const Header = styled.div`
    background: ${props => props.theme.colors.primary};
    position: fixed;
    right: 0;
    width: 100%;
    height: 3.5rem;
`
export const Nav = styled.div`
    text-align: end; 
    padding: 1rem 0 1rem 0;
    max-width: 90rem;
    
    & a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
    padding: .6rem;
    margin-left: 1rem; 
    font-size: 1.2rem;
    transition: 0.6s;
    border-radius: 1rem;
    cursor: default;
    }
    & a:hover {
    box-shadow: 0px 0px 20px ${props => props.theme.colors.shadow};
    }
`
