import styled from 'styled-components'

export const Page = styled.div`
    padding-top: 4rem;
`

export const Row = styled.div`
    display: flex;

    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

export const Col = styled.div`
    text-align: center;
    font-size: 1.5rem;
    box-shadow: 0 0 10px ${props => props.theme.colors.text};
    padding: 1rem;
    margin-top: 1.5rem;
`

export const Title = styled.div`
    border-top: solid 1px #fff;
    font-size: 2rem;
    padding-top: 1rem;
`