import './App.css'
import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './routes/About/About'
import Skills from './routes/Skills/Skills'
import Project from './routes/Project/Project'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default App
