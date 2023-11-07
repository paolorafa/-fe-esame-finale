import React from 'react'
import Navigation from '../componentsClient/navbar/Navigation'
import NavLink from '../componentsClient/navLink/NavLink'
import { useFetch } from '../hooks/useFetch'


function CategoryVele() {

    const {data} = useFetch(`${process.env.REACT_APP_URL}/category`)
    console.log(data);
  return (
    <>
    <Navigation/>
    <NavLink/>
    
    </>
  )
}

export default CategoryVele