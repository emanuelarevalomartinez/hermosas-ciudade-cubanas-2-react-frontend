import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";
import iconHome from "/cuba/icons/icons8-island-flat-96.png";

import { FcMenu } from "react-icons/fc";
import { Context, LI } from "../Common";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { navBarLanguage } from "./language";

export function NavBar() {
  const navigate = useNavigate();

  const { lightTheme, languageEs, setLanguageEs, handleChangeLightStatus } = useContext(Context);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(
    localStorage.getItem("activeMenuItem") || "/"
  );
  const currentTexts = languageEs ? navBarLanguage.es : navBarLanguage.en; 

  function handleChangeMenuVisibility() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleMenuItemClick = (redirection: string) => {
    setActiveMenuItem(redirection);
    localStorage.setItem("activeMenuItem", redirection);
    setIsMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    const newLanguageEs = !languageEs;
    setLanguageEs(newLanguageEs);
    localStorage.setItem("language", newLanguageEs.toString());
  };

  useEffect(() => {
    if (lightTheme) {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  }, [lightTheme]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full dark:bg-[#303030] bg-[#3572EF] sm:hidden flex items-center justify-between p-4 z-50 dark:text-[#3ABEF9] text-white">
         <div
          onClick={() => {
            handleChangeMenuVisibility();
          }}
          className="w-1/6 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <div className="relative w-6 h-6 bg-white dark:bg-[#303030]">
            <FcMenu
              size={24}
              className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
            />
            <FcPrevious
              size={24}
              className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
            />
          </div>
        </div>
        <div
          className="flex w-4/6 justify-center space-x-2 hover:cursor-pointer"
          onClick={() => {
            navigate("/"), 
            setIsMenuOpen(false);
            setActiveMenuItem("/");
          }}
        >
          <img
            className="w-8 h-8"
            src={iconHome}
            alt="It is not possible to view the imagen"
          />
          <p className="text-2xl"> CUBA </p>
        </div>
        <div className="flex w-1/6">
          <p
          className="text-center w-1/2"
          onClick={ () => { handleLanguageToggle ()} }
          > { languageEs ? "EN" : "ES" } </p>
          <p
          className="flex w-1/2 justify-center"
            onClick={() => {
              handleChangeLightStatus();
            }}
          >
            {lightTheme ? <MdDarkMode size={24} /> : <CiLight size={24} />}
          </p>
        </div>
      </nav>

      <nav
        className={`${
          isMenuOpen ? "left-0" : "-left-[150%]"
        } fixed sm:left-0 top-8 sm:top-0 w-screen h-screen sm:h-auto flex transition-all duration-300 ease-in-out pt-8 sm:p-8 dark:bg-[#454545] dark:sm:bg-[#303030] bg-[#6895ef] sm:bg-[#3572EF] dark:text-[#3ABEF9] text-gray-700`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-7 items-center w-full text-center h-1/2 justify-center">
          <div className="hidden sm:flex justify-center cursor-pointer"
          onClick={ ()=> { 
            navigate("/");
            setActiveMenuItem("/");
           } }
          >
            <img
              className="w-10 h-10"
              src={iconHome}
              alt="It is not possible to view the imagen"
            />
          </div>
          <LI
            title={currentTexts.cities}
            redirection="/Ciudades"
            active={activeMenuItem === "/Ciudades"}
            click={ ()=> { 
              handleChangeMenuVisibility();
              handleMenuItemClick("/Ciudades")
             } }
          />
          <LI
            title={currentTexts.culture}
            redirection="/Cultura"
            active={activeMenuItem === "/Cultura"}
            click={ ()=> { 
              handleChangeMenuVisibility();
              handleMenuItemClick("/Cultura")
             } }
          />
          <LI
            title={currentTexts.map}
            redirection="/Mapa"
            active={activeMenuItem === "/Mapa"}
            click={ ()=> { 
              handleChangeMenuVisibility();
              handleMenuItemClick("/Mapa")
             } }
          />
          <LI
            title={currentTexts.curiosities}
            redirection="/Curiosidades"
            active={activeMenuItem === "/Curiosidades"}
            click={ ()=> { 
              handleChangeMenuVisibility();
              handleMenuItemClick("/Curiosidades")
             } }
          />
          <LI
            title={currentTexts.about}
            redirection="/AcercaDe"
            active={activeMenuItem === "/AcercaDe"}
            click={ ()=> { 
              handleChangeMenuVisibility();
              handleMenuItemClick("/AcercaDe")
             } }
          />

          <li className="hidden sm:flex flex-row items-center justify-around col-start-7 ">
          <p
          className="text-center w-1/2 text-white dark:text-[#3ABEF9]"
          onClick={ () => { handleLanguageToggle ()} }
          > { languageEs ? "EN" : "ES" } </p>
            <p
              className="m-1 cursor-pointer text-white dark:text-[#3ABEF9]"
              onClick={() => {
                handleChangeLightStatus();
              }}
            >
              {lightTheme ? <MdDarkMode size={24} /> : <CiLight size={24} />}
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
}
