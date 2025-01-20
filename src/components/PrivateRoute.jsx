import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const user = useRecoilValue(userAtom);
  return user ? <Outlet/> : <Navigate to="/login" replace/>
}

export default PrivateRoute