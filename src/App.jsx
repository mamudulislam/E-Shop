import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Blog from './Pages/Blog/Blog'
import Contact from './Pages/Contact/Contact'
import Rootlaout from './Layouts/RootLaout/Rootlaout'
import Singelproducts from './Pages/Product/Components/Singelproducts/Singelproducts'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Rootlaout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Product/:id' element={<Singelproducts />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Route >
      </Route >

    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App