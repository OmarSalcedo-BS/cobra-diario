import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import PanelAdmin from "../pages/admin/PanelAdmin";
import PanelSocio from "../pages/socio/PanelSocio";
import RutaProtegida from "../components/RutaProtegida";

export const routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/admin",
    element: <RutaProtegida proteger = {<PanelAdmin />}/>,
  },
  {
    path: "/socio",
    element: <RutaProtegida proteger = {<PanelSocio />} />,
  }
];