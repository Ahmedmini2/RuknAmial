import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import i18next from "../../services/i18next";
import { useTranslation } from "react-i18next";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  const [t] = useTranslation()
  const ChangeLang = () => {
    if (i18next.language == "en") {
    i18next.changeLanguage("ar")
    } else {
      i18next.changeLanguage("en")
    }
  }

  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-right items-center">
          
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {t(name)}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {t(item.name)}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className=" px-4 lg:w-6/12 justify-end text-right">
            <Typography variant="h4" className="" color="blue-gray">
              <img src="img/logo-gold.png" alt="Rukn Amial" className=" w-44 inline-flex" />
            </Typography>
            <Typography className="font-normal text-blue-gray-500 justify-end">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center  gap-2 md:mb-0 lg:justify-end">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "ركن أميال",
  description:
    " شركة ركن أميال للمقاولات من الشركات الوطنية المميزة في المملكة العربية السعودية التي اتبعت سياسات مدروسة منذ انطلاقة الشركة وارتكزت تلك السياسات على أسس عملية وحلول واقعية مدروسة, وقد نهجت الشركة طموح يتنامى بشكل كبير لتحقيق الإنجازات الكبرى. ومن ثم المضي في إستراتيجية عمل مرنة تسعى لتحقيق الزيادة الشاملة في قطاع المقاولات العامة وهو ما يقود لضرورة الحفاظ على البصمة المميزة في إدارة وتنفيذ المشاريع العامة والكبرى",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "pink",
      name: "dribbble",
      path: "https://www.dribbble.com/creativetim",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About", path: "/about-us" },
        { name: "Home", path: "/" },
        {
          name: "Contact",
          path: "/contact-us",
        },
        {
          name: "Services",
          path: "/services",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          name: "Terms and Conditions",
          path: "/terms-and-conditions",
        },
        {
          name: "blogs",
          path: "/blogs",
        },
        {
          name: "Projects",
          path: "/projects",
        },
      ],
    },
  ],
  copyright: (
    <>
      حقوق النشر © {year} جميع الحقوق محفوظة لدى شركة ركن أميال للمقاولات

    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
