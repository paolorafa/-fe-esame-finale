import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginProvider from './pages/LoginProvider'
import HomeDeveloper from './pages/HomeDeveloper'
import NotfoudPage from './pages/NotfoudPage'
import LayoutCatecory from './componentsDev/layoutDeveloper/LayoutCatecory'
import HomeClient from './pages/HomeClient'
import RegisterDeveloper from './pages/RegisterDeveloper'
import ProtecetedRouters from './middlewars/ProtectedRoutes'
import ModificaProduct from './pages/ModificaProduct'
import { LoginSucces } from './pages/LoginSucces'
import RegisterCLient from './pages/RegisterCLient'
import ProductDetails from './pages/ProductDetails'
import BasketPage from './pages/BasketPage'
import InfoClient from './pages/infoclient/InfoClient'
import PageLoginClient from './pages/PageLoginClient'
import PageForCategory from './pages/PageForCategory'
import PageProductDetail from './pages/PageProductDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginProvider />} />
          <Route path='/client/create' element={<RegisterCLient />} />
          <Route path='/success/:token' element={<LoginSucces />} />
          <Route path="/client/login" element={<PageLoginClient />} />
          <Route path="/providers/create" element={<RegisterDeveloper />} />
          <Route path="/home/client" element={<HomeClient />} />
          <Route path="/category/:id/:category" element={<PageForCategory />}></Route>
          <Route path='/products/:id' element={<PageProductDetail />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path="/products/update/:id" element={<ModificaProduct />}></Route>
          <Route path="/infoclient" element={<InfoClient />} />


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