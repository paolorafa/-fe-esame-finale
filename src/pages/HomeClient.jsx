import React from 'react'
import Navigation from '../componentsClient/navbar/Navigation'
import NavLink from '../componentsClient/navLink/NavLink'
import Jumbotron from '../componentsClient/jumbotron/Jumbotron'
import MainCard from '../componentsClient/mainCard/MainCard'
import Footer from '../componentsClient/footerEcommerce/Footer'

function HomeClient() {
  return (
    <>
    <Navigation/>
    <NavLink/>
    <Jumbotron />
    <MainCard/>
    <Footer/>
    </>
  )
}

export default HomeClient