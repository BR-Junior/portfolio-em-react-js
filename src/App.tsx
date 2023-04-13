import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import NavBar from './components/NavBar/NavBar'
import { Wrapper } from './components/Wrapper/Wrapper'
import { Outlet } from 'react-router-dom'
import Skills from './routes/Skills/Skills'
import Projects from './routes/./Projects/Projects'
import {TodoList} from "./routes/TodoList/TodoList";




const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <NavBar />
      <Wrapper>
        <Outlet />
        <Skills />
        <Projects />
        <TodoList />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
