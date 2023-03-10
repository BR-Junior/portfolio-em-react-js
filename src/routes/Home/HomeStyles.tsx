import styled from 'styled-components'
import * as S from '../../components/StylesBase'

export const HomeCol = styled(S.Col)`
    img {
        border-radius: 5rem;
    }
    span {
        display: flex;
        width: 0;
        gap: 1rem;
        margin-left: 0;
    }
    @media only screen and (max-width: 1000px) {
        img {width:100%}
    }
`