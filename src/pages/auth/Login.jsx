import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { alertaGeneral, alertaRedireccion } from "../../utils/alertas";
import { useEffect, useState } from "react";
import { generarToken } from "../../utils/generadores";
import { guardarEnLocalStorage } from "../../utils/local-storage";
import { endopoints } from "../../api/servicios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  function getUsuarios() {
    fetch(endopoints.users)
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }

  useEffect(() => { getUsuarios() }, [])





  function buscarUsuarios() {
    return usuarios.find((usuario) => usuario.email === email && usuario.password === password);
  }

  let redirection = useNavigate();
  
  function iniciarSesion() {
    let usuario = buscarUsuarios()
    if (usuario) {
      let token = generarToken();
      guardarEnLocalStorage("token", token);
      guardarEnLocalStorage("usuario", usuario);
      if(usuario.role === "admin"){
        alertaRedireccion("Bienvenido", "success", "/admin", redirection);
      }else if (usuario.role === "socio"){
        alertaRedireccion("Bienvenido", "success", "/socio", redirection);
      }
    } else {
      alertaGeneral(
        "Error en el inicio de sesión",
        "Correo o contraseña incorrectos",
        "error"
      );
    }
  }

  return (
    <div className="header-section">
      <div className="titulo">Cobra Diario</div>
      <form className="form">
        <p className="form-title">Inicia sesión en tu cuenta</p>
        <div className="input-container">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa un correo"
            type="email"
            required
          />
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            type="password"
            required
          />

          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <button onClick={iniciarSesion} className="submit" type="button">
          Iniciar Sesión
        </button>

        <p className="signup-link">
          ¿No tienes una cuenta?
          <Link to="/registro">Registrarse</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
