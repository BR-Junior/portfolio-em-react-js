import styled from 'styled-components'

export const Page = styled.div`
    padding-top: 4rem;
`

export const Row = styled.div`
    display: flex;
`

export const Col = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    box-shadow: 0 0 10px ${props => props.theme.colors.text};
    padding: 1rem;
    margin-top: 1.5rem;
    width: 100%;

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

    @media only screen and (max-width: 1000px) {
        display: flex;
        /* flex-direction: column; */
        width: auto;
    }
`

export const Title = styled.div`
    border-top: solid 1px #fff;
    font-size: 2rem;
    padding-top: 1rem;
`