import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Books from './components/Books'
import Home from './components/Home'
import About from './components/About'



const router = createBrowserRouter([{

  path:'/',
  element:<App></App>,
  children:[
    {
      path: '/',
      element: <Home/>,
    },
    {
      path:'books',
      element:<Books/>
    },
    {
      path: 'about',
      element: <About/>
    }
  ]

},

])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router = {router}/>
)
