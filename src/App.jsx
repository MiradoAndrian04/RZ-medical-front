import './App.css'
import './index.css'
import Produits from './components/Produits';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <>
    <Produits/>
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    
    </>
  )
}
export default App
