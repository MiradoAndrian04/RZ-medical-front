import './App.css'
import './index.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Body from './components/page/Body'
import Produits from './components/Produits';
import ServProdCard from './components/ServprodCard'
import About from './components/AboutComponent'
import Avantage from './components/Advantage'
import Footer from './components/page/Footer'
import Login from './Admin/Login'
import Prod from '../src/components/page/ProduitPage'
import ProdShow from './components/page/ShowProduit'
import Navbar from './components/Navbar';
import Contact from './components/page/ContactPage'


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/produit-expo" element={<Produits/>}/>
      <Route path="/service" element={<ServProdCard/>}/>
      <Route path="/a-propos" element={<About/>}/>
      <Route path="/advantage" element={<Avantage/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/produit" element={<Prod/>}/>
      <Route path="/produit/produit-show" element={<ProdShow/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}
export default App
