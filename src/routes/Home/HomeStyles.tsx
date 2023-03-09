import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    padding-top: 4rem;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
    @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

export const Col = styled.div`
    margin: 0;

   & img {
        width: 500px;
        height: 500px;
        border-radius: 2rem;
   }

   & .Content {
        font-size: 2rem;
   }

   & .Link {
        display: inline-block;
        padding-right: 1rem;
   }
`