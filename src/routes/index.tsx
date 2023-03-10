import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'



export const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'skills',
        element:<Skills />
      },
      {
        path:'project',
        element:<Project />
      },
      {
        // :id é um valor dinamico
        path:'/user/:id',
        element:'',
      }
    ]
  }
])