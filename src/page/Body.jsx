import HomeCard from '../components/HomeCard'
import Produits from '../components/Produits'
import ServProd from '../components/ServprodCard'
import About from '../components/AboutComponent'
import Avantage from '../components/Advantage'
import Footer from '../components/Footer'

function Body() {
  return (
    <div className="body mt-[75px] max-sm:mt-[60px]">
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