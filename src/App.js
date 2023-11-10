import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginProvider from './pages/LoginProvider'
import HomeDeveloper from './pages/HomeDeveloper'
import NotfoudPage from './pages/NotfoudPage'
import LayoutCatecory from './componentsDev/layoutDeveloper/LayoutCatecory'
import HomeClient from './pages/HomeClient'
import RegisterDeveloper from './pages/RegisterDeveloper'
import ProtecetedRouters from './middlewars/ProtectedRoutes'
import ModifyProduct from './pages/ModifyProduct'
import { LoginSucces } from './pages/LoginSucces'
import RegisterCLient from './pages/RegisterCLient'
import LoginClient from './pages/LoginClient'
import VerifyCodeDeveloper from './pages/VerifyCodeDeveloper'
import CategoryVele from './pages/CategoryVele'
import ProductDetails from './pages/ProductDetails'
import BasketPage from './pages/BasketPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginProvider />} />
          <Route path='/client/create' element={<RegisterCLient />} />
          <Route path='/success/:token' element={<LoginSucces />} />
          <Route path="/client/login" element={<LoginClient />} />
          <Route path="/providers/create" element={<RegisterDeveloper />} />
          <Route path='/verifycode' element={<VerifyCodeDeveloper />} />
          <Route path="/home/client" element={<HomeClient />} />
          <Route path="category/:id" element={<CategoryVele />}></Route>
         < Route path='/products/:id' element={<ProductDetails/>} />
         < Route path='/basket' element={<BasketPage/>} />

<Route path="/products/update/:id" element={<ModifyProduct />}></Route>

          <Route element={<ProtecetedRouters />} >
            <Route path='/home' element={<HomeDeveloper />} />

            
            <Route path='/category' element={<LayoutCatecory />} />


          </Route>





          <Route path='*' element={<NotfoudPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App