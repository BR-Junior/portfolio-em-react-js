import styled from 'styled-components'
import {Col, Row} from '../../components/StylesBase'

export const ProjectCol = styled(Col)`
    display: flex;
    text-align: center;
    justify-content: space-around;
    & img{
    width: 9.7rem;
    }
    
    & span {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 1rem;
    margin: 0;
    }

    & span h4{
    text-transform: uppercase;
    }

    & p {
    font-size: 1rem;
    width: 9.7rem;
    height: 4rem;
    padding-top: .5rem;
    text-align: center;
    }

    & a {
    text-decoration: none;
    color: #fff;
    padding: .9rem;
    border-radius: 1rem;
    border: solid 1px rgb(255, 255, 255);
   }
   & a:hover {
    box-shadow: 0px 0px 20px rgb(26, 98, 205);
    }
    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`