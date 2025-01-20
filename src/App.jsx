import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./Admin/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProduitPage from "./page/ProduitPage";
import ShowProduit from "./page/ShowProduit";
import ProduitsAll from "./components/ProduitsAll";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />

          {/* Routes Produits accessibles */}
          <Route path="/produits" element={<RedirectIfAuthenticated />}>
            <Route index element={<ProduitsAll />} />
            <Route path=":id" element={<ShowProduit />} />
          </Route>

          {/* Page de login */}
          <Route path="/login" element={<Login />} />

          {/* Routes Admin protégées */}
          <Route path="/admin" element={<PrivateRoute />}>
            {/* Redirection automatique de /admin vers /admin/produits */}
            <Route index element={<Navigate to="produits" replace />} />

            {/* Sous-routes pour admin (sans le / initial pour éviter l'erreur) */}
            <Route path="produits" element={<ProduitPage />}>
              <Route index element={<ProduitsAll />} />
              <Route path=":id" element={<ShowProduit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
