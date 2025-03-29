import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';


const SiteLayout = () => {

   return (
      <div className='font-poppins text-[16px]'>
         <Navbar/>
         <Outlet />
         <Footer/>
      </div>
   );
};

export default SiteLayout;
