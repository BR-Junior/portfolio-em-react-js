import styled from 'styled-components'

export const Section = styled.div`
    padding-top: 5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
`
export const Title = styled.div`
    border-top: solid 1px #fff;
    font-size: 2rem;
    padding-top: 1rem;
`
export const Row = styled.div`
    display: flex;
    width: 100%;
    box-shadow: 0 0 10px ${props => props.theme.colors.shadow};

    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`
export const Col = styled.div`
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
`