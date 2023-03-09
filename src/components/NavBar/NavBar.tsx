import './NavBar.css'
import { Link as Scroll} from 'react-scroll'

const NavBar = () => {
    return(
        <div id='header'>
            <nav className='NavBar'>
                <Scroll to='Home' smooth={true} duration={1000} spy={true}>Home</Scroll>
                <Scroll to='About' smooth={true} duration={1000} >About</Scroll>
                <Scroll to='Skills' smooth={true} duration={1000}>Skills</Scroll>
                <Scroll to='Project' smooth={true} duration={1000}>Project</Scroll>
            </nav>
        </div>
    )
}

export default NavBar