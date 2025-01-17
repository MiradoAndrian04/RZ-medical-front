import React from 'react'
import Navbar from '../components/Navbar'
import HomeCard from '../components/HomeCard'
import Produits from '../components/Produits'
import ServProd from '../components/ServprodCard'
import About from '../components/AboutComponent'
import Avantage from '../components/Advantage'
import Footer from '../components/Footer'

function Body() {
  return (
    <>
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