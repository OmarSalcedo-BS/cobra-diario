import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
function PanelSocio() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default PanelSocio;