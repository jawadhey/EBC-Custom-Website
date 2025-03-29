
import { createBrowserRouter } from "react-router-dom";
import MainLandingPage from "../pages/Landing/MainLandingPage";
import SiteLayout from "../layouts/SiteLayout";
import AboutUsPage from "../pages/About/AboutUsPage";
import ContactPage from "../pages/Contact/ContactPage";
import UniversitiesPage from "../pages/Universities/UniversitiesPage";
 

const Router = () => {

   return createBrowserRouter([
      {
         path: "/",
         element: <SiteLayout />,
         children: [
            {
               index: true,
               element: <MainLandingPage />,
            },
            {
               path: 'about-us',
               element: <AboutUsPage />,
            },
            {
               path: 'contact-us',
               element: <ContactPage />,
            },
            {
               path: 'universities',
               element: <UniversitiesPage />,
            },
            
         ],
      },
   
   ]);
};

export default Router