import './App.css'
import './index.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Body from './components/page/Body'
import Produits from './components/Produits';
import ServProd from './components/ServprodCard'
import About from './components/AboutComponent'
import Avantage from './components/Advantage'
import Footer from './components/page/Footer'
import Navbar from './components/Navbar'
import Login from './Admin/Login'
import ServProdCard from './components/ServprodCard'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/produit-expo" element={<Produits/>}/>
      <Route path="/service" element={<ServProdCard/>
    }/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/advantage" element={<Avantage/>}/>
      <Route path="/contact" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
