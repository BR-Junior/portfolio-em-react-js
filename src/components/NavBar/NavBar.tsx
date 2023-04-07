import { Link as Scroll} from 'react-scroll'
import * as S from './NavBarStyles'
import {SocialButton} from "../SocialButton/SocialButton";

const NavBar = () => {
    return(
        <>
        <S.Header>
            <S.Nav>
                <Scroll to='Home' smooth={true} duration={1000} spy={true}>About Me</Scroll>
                <Scroll to='Skills' smooth={true} duration={1000}>Skills</Scroll>
                <Scroll to='Projects' smooth={true} duration={1000}>Projects</Scroll>
                {/*<Scroll to='Crud' smooth={true} duration={1000}>Crud</Scroll>*/}
            </S.Nav>
            <SocialButton/>
        </S.Header>
        </>
    )
}
export default NavBar