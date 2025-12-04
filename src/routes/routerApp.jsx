import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import PanelAdmin from "../pages/admin/PanelAdmin";
import PanelSocio from "../pages/socio/PanelSocio";
import RutaProtegida from "../components/RutaProtegida";
import ListadoSolicitudes from "../pages/admin/ListadoSolicitudes";
import ListadoSocios from "../pages/admin/ListadoSocios";

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
    path: "/admin/",
    element: <RutaProtegida proteger = {<PanelAdmin />}/>,
    children: [
      {
        path: "solicitudes",
        element: <ListadoSolicitudes />,
      },
      {
        path: "socios",
        element: <ListadoSocios />,
      },
    ],
  },
  {
    path: "/socio/",
    element: <RutaProtegida proteger = {<PanelSocio />} />,
    children: [
      {
        path: "solicitudes",
        element: <ListadoSolicitudes />,
      },
    ],
  }
];