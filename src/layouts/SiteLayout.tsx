import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const SiteLayout = () => {
   const location = useLocation();
   const isAbsolute = location.pathname === '/';

   return (
      <div className='font-poppins text-[16px]'>
         <Navbar isAbsolute={isAbsolute} />
         <Outlet />
         <Footer />
      </div>
   );
};

export default SiteLayout;
