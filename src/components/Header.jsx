import {eliminarDeLocalStorage} from '../utils/local-storage';
import {alertaRedireccion} from '../utils/alertas';
import { useNavigate } from 'react-router-dom';
import { obtenerDeLocalStorage } from '../utils/local-storage';


const Header = () => {
  let redirection = useNavigate();
  let usuario = obtenerDeLocalStorage("usuario");
  let iniciales = usuario.name.split(" ").map((name) => name.charAt(0).toUpperCase()).join("");
  function cerrarSesion() {
    eliminarDeLocalStorage("token");
    alertaRedireccion("Cerrando sesión", "info", "/", redirection);
    
  }



  return (
    <header>
      <span>{iniciales}</span>
      <span> Hola, {usuario.name}</span>
      <span> {usuario.role}</span>
      <nav>
        <a href="">Solicitudes</a>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </nav>
    </header>
  );
};

export default Header;