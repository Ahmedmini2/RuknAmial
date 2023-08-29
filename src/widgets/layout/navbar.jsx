import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import i18next from "../../services/i18next";
import { useTranslation } from "react-i18next";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [t] = useTranslation()

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const ChangeLang = () => {
    if (i18next.language == "en") {
    i18next.changeLanguage("ar")
    } else {
      i18next.changeLanguage("en")
    }
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize text-lg hover:bg-white hover:bg-opacity-20 rounded-lg p-2 hover:shadow-lg ease-in-out delay-50 hover:-translate-y-1 shadow-gray-500/10"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 "
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {t(name)}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {t(name)}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className=" cursor-pointer">
            <img src="img/logo-gold.png" alt="Rukn Amial" className=" max-w-[150px]" />
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden  lg:flex text-lg  ">
          <Link
            to="/blogs"
            
          >
            <Button variant="text" size="lg" color="white" fullWidth>
            {t('Blogs')}
            </Button>
          </Link>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
         
            <Button variant="text" onClick={ChangeLang} size="sm" color="white" fullWidth>
            {t('Lang')}
            </Button>

          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        
        
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto ">
          {navList}
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block "
          >
            <Button variant="text" size="lg" fullWidth>
            {t('Blogs')}
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
           <Button variant="text" size="lg" fullWidth>
            {t('Lang')}
            </Button>
          
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
