import {eliminarDeLocalStorage} from '../utils/local-storage';
import {alertaRedireccion} from '../utils/alertas';
import { useNavigate, Link } from 'react-router-dom';
import { obtenerDeLocalStorage } from '../utils/local-storage';


const Header = () => {
  let redirection = useNavigate();
  let usuario = obtenerDeLocalStorage("usuario");
  let iniciales = usuario.name.split(" ").map((name) => name.charAt(0).toUpperCase()).join("");
  function cerrarSesion() {
    eliminarDeLocalStorage("token");
    eliminarDeLocalStorage("usuario");
    alertaRedireccion("Cerrando sesión", "info", "/", redirection);
    
  }



  return (
    <header>
      <span>
        {iniciales}, {usuario.name}
      </span>
      <br />
      <span> {usuario.role}</span>
      <nav>
        {
          usuario.role == "admin" ? (
            <div>
              <Link to="/admin/solicitudes">Ver solicitudes</Link>
              <Link to="/admin/socios">Ver socios</Link>
            </div>

          ) : (
            <div>
              <Link to="/socio/solicitudes">Realizar solicitudes</Link>
            </div>
          )
        }
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </nav>
    </header>
  );
};

export default Header;