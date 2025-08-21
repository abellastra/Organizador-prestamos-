import AppRouters from './routes/AppRouters.tsx';
//  import { useLocation } from 'react-router-dom';
function App() {
// const location=useLocation();
// const hideMenuOnRoutes = ["/dashboard", "/newloan", "/showloans", "/inactiveLoans"];

// const shouldHideMenu= hideMenuOnRoutes.includes(location.pathname)
  return (
    <>
    {/* {!shouldHideMenu && <NavBar />} */}
      <AppRouters />
    </>
  );
}

export default App
