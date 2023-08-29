import { Home, AboutUs, OurServices, ContactUs, OurProjects } from "@/pages";



export const routes = [
  {
    
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    
    name: "About",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    
    name: "Contact",
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    
    name: "Services",
    path: "/services",
    element: <OurServices />,
  },
  {
    
    name: "Projects",
    path: "/projects",
    element: <OurProjects />,
    
  },
  
];

export default routes;
