import styled from 'styled-components'
import {Col} from '../../components/StylesBase'


const SkillsCol = styled(Col)`
    display:  flex;
    justify-content: space-evenly;
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
        flex-direction: column;
    }
`
export default SkillsCol