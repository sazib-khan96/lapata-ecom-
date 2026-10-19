import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'

const Route = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {
        index : true,
        Component:Home
      },
      {
        path: 'shop',
        Component:Shop
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Route}></RouterProvider>
  </StrictMode>,
)
