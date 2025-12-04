import {eliminarDeLocalStorage} from '../utils/local-storage';
import {alertaRedireccion} from '../utils/alertas';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  let redirection = useNavigate();
  function cerrarSesion() {
    eliminarDeLocalStorage("token");
    alertaRedireccion("Cerrando sesión", "info", "/", redirection);
    
  }



  return (
    <header>
      <span>OS, Omar Salcedo</span>
      <span></span>
      <nav>
        <a href="">Solicitudes</a>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </nav>
    </header>
  );
};

export default Header;