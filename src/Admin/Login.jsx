import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const setUser = useSetRecoilState(userAtom);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mot_de_passe: password,
        }),
      });
      const data = await res.json();
      if (res.status === 422) {
        setError(data.errors);
        setLoading(false);
        return;
      }
      if (res.status !== 200) {
        setError(data.message);
        setLoading(false);
        return;
      }
      localStorage.setItem("admin-user", JSON.stringify(data.access_token));
      setUser(data);
      toast.success("Connexion réussie");
      navigate("/products");
    } catch (error) {
      setLoading(false);
      console.log("error :", error);
      toast.error("Une erreur est survenue lors de la connexion.");
    }
  };

  return (
    <div className="bg-[url('/img/25916.jpg')] bg-no-repeat bg-cover bg-right h-screen flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-md max-sm:h-full  p-10 rounded-lg shadow-2xl text-slate-700">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-3">
          Connexion
        </h2>
        <span className="text-center block mb-5 text-sm">
          Veuillez vous connecter à votre compte.
        </span>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 bg-transparent block w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {error?.email && <span className="text-red-500 mt-2 block">{error.email[0]}</span>}
          </div>

          {/* Password */}
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 block bg-transparent w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FontAwesomeIcon icon={faEye} className="absolute right-3 bottom-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
            </div>
            {error?.mot_de_passe && <span className="text-red-500 mt-2 block">{error.mot_de_passe[0]}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue text-white opacity-60 hover:opacity-80  py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {loading ? "Loading ..." : "Se connecter"}
          </button>
          {error && !error.email && !error.mot_de_passe && <span className="text-red-500 mt-2 block">{error}</span>}
        </form>

        {/* Forgot Password */}
        {/* <div className="text-center mt-6">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Mot de passe oublié ?
          </a>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;