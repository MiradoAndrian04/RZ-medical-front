import './App.css'
import './index.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeCard from './components/HomeCard'
import ServProd from './components/ServprodCard'
import About from './components/AboutComponent'
import Avantage from './components/Advantage'
import Footer from './components/page/Footer'
import AboutComponent from './components/AboutComponent'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <HomeCard/>
    <ServProd/>
    <About/>
    <Avantage/>
    <Footer/>
    {/* <Routes>
      <Route path="/" element={<HomeCard/>}/>
      <Route path="/produit-expo" element={""}/>
      <Route path="/service" element={<ServProd/>}/>
      <Route path="/a-propos" element={<AboutComponent/>}/>
      <Route path="/advantage" element={<Avantage/>}/>
      <Route path="/contact" element={<Footer/>}/>
    </Routes> */}
    </BrowserRouter>
    </>
  )
}
export default App
