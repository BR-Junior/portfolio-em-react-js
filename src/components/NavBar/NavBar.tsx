import { Link as Scroll} from 'react-scroll'
import * as S from './NavBarStyles'

const NavBar = () => {
    return(
        <>
        <S.Header>
            <S.Nav>
                <Scroll to='Home' smooth={true} duration={1000} spy={true}>About Me</Scroll>
                {/*<Scroll to='About' smooth={true} duration={1000} >About Me</Scroll>*/}
                <Scroll to='Skills' smooth={true} duration={1000}>Skills</Scroll>
                <Scroll to='Project' smooth={true} duration={1000}>Project</Scroll>
            </S.Nav>
        </S.Header>
        </>
    )
}
export default NavBar