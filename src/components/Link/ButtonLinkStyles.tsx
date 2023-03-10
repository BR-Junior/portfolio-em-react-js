import styled from "styled-components";

const ButtonLinkStyles = styled.div`
    a{
    border: solid 1px rgb(255, 255, 255);
    background-color: transparent;
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: 1rem;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: 0.6s;
    text-transform: uppercase;
    box-shadow: 0px 2px 2px lightgrey;
    }
    & a:hover {
    background-color: ${props => props.theme.colors.hover};
    }
`
export default ButtonLinkStyles