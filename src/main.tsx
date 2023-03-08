import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Skills from './routes/Skills/Skills'



const router = createBrowserRouter([
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
        // :id é um valor dinamico
        path:'/user/:id',
        element:'',
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
