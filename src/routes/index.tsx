import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from './Home/Home'
import Skills from './Skills/Skills'
import Projects from '././Projects/Projects'
import { TodoList } from "./TodoList/TodoList";



export const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        path:'/portfolio',
        element:<Home />
      },
      {
        path:'skills',
        element:<Skills />
      },
      {
        path:'project',
        element:<Projects />
      },
      {
        path:'todo-list',
        element:<TodoList />
      },
      {
        // :id é um valor dinamico
        path:'/user/:id',
        element:'',
      }
    ]
  }
])