import HomeCard from '../components/HomeCard'
import Produits from '../components/Produits'
import ServProd from '../components/ServprodCard'
import About from '../components/AboutComponent'
import Avantage from '../components/Advantage'
import Footer from '../components/Footer'

function Body() {
  return (
    <div className="">
    <HomeCard/>
    <Produits/>
    <ServProd/>
    <About/>
    <Avantage/>
    <Footer/>
    </div>
  )
}

export default Body