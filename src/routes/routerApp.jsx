import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";

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