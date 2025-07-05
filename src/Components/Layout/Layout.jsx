import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet , useLocation } from 'react-router-dom';

export default function Layout() {


    const location = useLocation();
    const hideNavbarRoutes = ['/login', '/register']; // زود المسارات اللي مش عايز فيها navbar
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);



    return (
        <>
        
               {!shouldHideNavbar && <Navbar />}
               <div className=''>
      <Outlet />
      </div>
      {!shouldHideNavbar && <Footer />}
        </>
    );
}
