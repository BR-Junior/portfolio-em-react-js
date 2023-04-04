import GlobalStyle from './styles/global'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'

import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Skills from './routes/Skills/Skills'
import Projects from './routes/./Projects/Projects'
import {Wrapper} from "./components/Wrapper/Wrapper";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <NavBar />
      <Wrapper>
      <Outlet />
      <Skills />
      <Projects />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
