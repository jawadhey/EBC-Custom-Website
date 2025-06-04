
import { createBrowserRouter } from "react-router-dom";
import MainLandingPage from "../pages/Landing/MainLandingPage";
import SiteLayout from "../layouts/SiteLayout";
import AboutUsPage from "../pages/About/AboutUsPage";
import ContactPage from "../pages/Contact/ContactPage";
import UniversitiesPage from "../pages/Universities/UniversitiesPage";
import SingleUnitversity from "../pages/SingleUniversity/SingleUnitversity";
import EventsPage from "../pages/Events/EventsPage";
import MbbsinChina from "../pages/Services/MbbsinChina";
import StudyInEurope from "../pages/Services/StudyInEurope";
import PfpForEngineers from "../pages/Services/PfpForEngineers";
import MoeListedUniversities from "../pages/Services/MoeListedUniversities";
 

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
            {
               path: 'university-detail/:id',
               element: <SingleUnitversity />,
            },
            {
               path: 'events',
               element: <EventsPage />,
            },
           
           
            {
               path: 'mbbs-in-china',
               element: <MbbsinChina />,
            },
            {
               path: 'study-in-europe',
               element: <StudyInEurope />,
            },
            {
               path: 'pfp-for-engineers',
               element: <PfpForEngineers />,
            },
            {
               path: 'moe-listed-universities',
               element: <MoeListedUniversities />,
            },

            
         ],
      },
   
   ]);
};

export default Router