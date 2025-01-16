import './App.css'
import './index.css'

import Navbar from './components/Navbar'
import HomeCard from './components/HomeCard'
import ServprodCard from './components/ServprodCard'
import Advantages from './components/Advantage'
import Footer from './components/page/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <>
    <Navbar/>,
    <HomeCard/>,
    <ServprodCard/>,
    <Advantages/>
    <Footer/>
    </>
  )
}
export default App
