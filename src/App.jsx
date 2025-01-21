import "./App.css";
import "./index.css";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import Login from "./Admin/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProductsPage from "./page/ProductsPage";
import ShowProduit from "./components/ShowProduit";
import ProduitsAll from "./components/ProduitsAll";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./page/Body";
import ContactPage from "./page/ContactPage"
import AddProductForm from "./Admin/AddProduct";
import CreateFormation from "./Admin/CreateFormation";

export const RedirectIfAuthenticated = () => {
  const user = useRecoilValue(userAtom);

  // Si l'utilisateur est connecté, redirige vers /admin
  if (user) {
    return <Navigate to="/admin" replace />;
  }

  // Sinon, rend les sous-routes (Outlet)
  return <Outlet />;
};
function App() {
  const location = useLocation();
  return (
    <>
      
      {location.pathname !== '/login' && <Navbar />}
        <Routes>
          <Route path="/" element={<Body />} />

          {/* Routes Produits accessibles */}
          <Route path="/products" element={<ProductsPage />}>
            <Route index element={<ProduitsAll />} />
            <Route path=":id" element={<ShowProduit />} />
          </Route>

          {/* Page de login */}
          <Route path="/login" element={<Login />} />

          {/* Routes Admin protégées */}
          <Route element={<PrivateRoute />}>
            {/* Redirection automatique de /admin vers /admin/produits */}
            <Route path="/add-product" element={<CreateFormation />} />

            {/* Sous-routes pour admin (sans le / initial pour éviter l'erreur) */}
            {/* <Route path="produits" element={<ProductsPage />}>
              <Route index element={<ProduitsAll />} />
              <Route path=":id" element={<ShowProduit />} />
            </Route> */}
          </Route>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
    </>
  );
}
export default App;
