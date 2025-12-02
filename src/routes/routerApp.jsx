import Login from "../pages/Login";
import Registro from "../pages/Registro";

export const routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
];