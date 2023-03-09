import GlobalStyle from './styles/global'
import {ThemeProvider} from 'styled-components'
import theme from './styles/themes/theme'

import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './routes/About/About'
import Skills from './routes/Skills/Skills'
import Project from './routes/Project/Project'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar />
      <GlobalStyle />
      <Outlet />
      <About />
      <Skills />
      <Project />
    </div>
    </ThemeProvider>
  )
}

export default App
