import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./page/Body";
import Login from "./Admin/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProduitPage from "./page/ProduitPage";
import ShowProduit from "./page/ShowProduit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/produits" element={<ProduitPage />} />
          <Route path="/produits/:id" element={<ShowProduit />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute/>}>
            <Route path= "/admin" element={<Body />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
