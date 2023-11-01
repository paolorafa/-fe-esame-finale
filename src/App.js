import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginProvider from './pages/LoginProvider'
import Home from './pages/HomeDeveloper'
import NotfoudPage from './pages/NotfoudPage'
import LayoutCatecory from './componentsDev/layoutDeveloper/LayoutCatecory'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LoginProvider/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/category' element={<LayoutCatecory/>}/>
          <Route path='/success/:token' element={<LoginProvider/>}/>


          <Route path='*' element={<NotfoudPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App