import GlobalStyle from './styles/global'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'

import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './routes/About/About'
import Skills from './routes/Skills/Skills'
import Project from './routes/Project/Project'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <NavBar />
      <Outlet />
      <About />
      <Skills />
      <Project />
    </ThemeProvider>
  )
}

export default App
