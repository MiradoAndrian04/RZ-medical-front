import './App.css'
import './index.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Admin/Login'
import Prod from '../src/components/page/ProduitPage'
import ProdShow from './components/page/ShowProduit'
import Navbar from './components/Navbar'
import Contact from './components/page/ContactPage'
import Profil from './components/page/Profil'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/produit" element={<Prod/>}/>
      <Route path="/produit/produit-show" element={<ProdShow/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/profil' element={<Profil/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
