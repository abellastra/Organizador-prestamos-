import Register from'./feactures/auth/Register'
import AppRouters from './routes/AppRouters.tsx';
import {NavBar} from './feactures/auth/NavBar.tsx';
 import { useLocation } from 'react-router-dom';
function App() {
const location=useLocation();
const hideMenuOnRoutes = ["/dashboard", "/newloan", "/showloans"];

const shouldHideMenu= hideMenuOnRoutes.includes(location.pathname)
  return (
    <>
      {!shouldHideMenu && <NavBar />}
      <AppRouters />
    </>
  );
}

export default App
