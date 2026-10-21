import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import { ToastContainer} from 'react-toastify';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Shop from './Pages/Shop/Shop.jsx'
import Product from './Component/Product/Product.jsx'
import SingleProduct from './Component/SingleProduct/SingleProduct.jsx'
import WishList from './Pages/WishList/WishList.jsx'
import Contact from './Pages/Contact/Contact.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
import Page404 from './Pages/Page404/Page404.jsx';

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
        loader: () => fetch('/products.json'),
        Component:Shop
      },
      {
        path:'/shop/:id',
        loader: () => fetch('/products.json'),
        Component:SingleProduct
      },
      {
        path:'wishList',
        Component:WishList
      },
      {
        path:"contact",
        Component:Contact
      },
      {
        path:'signUp',
        Component:SignUp
      }
      
    ]
    
  },
  {
    path:'/*',
    Component:Page404
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Route}></RouterProvider>
   <ToastContainer 
   position='top-center'
   autoClose={3000}
    />
  </StrictMode>,
)
