import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';

function PanelAdmin() {
  return (
    <main>
        <Header />
        <section>
          <Outlet />
        </section>
    </main>
  );
}

export default PanelAdmin;