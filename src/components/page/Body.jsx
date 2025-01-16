import React from 'react'
import Navbar from '../Navbar'
import HomeCard from '../HomeCard'
import Produits from '../Produits'
import ServProd from '../ServprodCard'
import About from '../AboutComponent'
import Avantage from '../Advantage'
import Footer from '../page/Footer'

function Body() {
  return (
    <>
    <Navbar/>
    <HomeCard/>
    <Produits/>
    <ServProd/>
    <About/>
    <Avantage/>
    <Footer/>
    </>
  )
}

export default Body