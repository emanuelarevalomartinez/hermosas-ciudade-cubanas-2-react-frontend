
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";
import iconHome from '/cuba/icons/icons8-island-flat-96.png'

import { FcMenu } from "react-icons/fc";
import { Context, LI } from "../Common";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function NavBar() {

    const navigate = useNavigate()

   const { lightTheme, setLightTheme } = useContext(Context);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);



  function handleChangeMenuVisibility() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleChangeLightStatus(){
    setIsLight(!isLight);
    setLightTheme(!lightTheme);
  }

  useEffect(() => {
    
  if(lightTheme){
     document.querySelector("html")?.classList.remove("dark")
  } else {
    document.querySelector("html")?.classList.add("dark")
  }

  }, [lightTheme])
  

  return (
    <>
      <nav className="fixed top-0 left-0 w-full dark:bg-[#303030] bg-[#3572EF] sm:hidden flex items-center justify-between p-4 z-50 dark:text-[#3ABEF9] text-white">
        <div onClick={ ()=> { handleChangeMenuVisibility() } } className="cursor-pointer bg-white dark:bg-[#303030] transition-all duration-300 ease-in-out">
         { isMenuOpen ? <FcPrevious size={24} /> : <FcMenu size={24} /> }
        </div>
        <div 
        className="flex w-full justify-center space-x-2 hover:cursor-pointer"
        onClick={ ()=> { navigate("/") } }
        >

        <img 
        className="w-8 h-8"
        src={iconHome} 
        alt="It is not possible to view the imagen" 
        />
        <p className="text-2xl"> CUBA </p>
        </div>
        <div className="flex space-x-2">
          <p> ES </p>
          <p
          onClick={ () => { handleChangeLightStatus() } }
          > { !isLight ? <MdDarkMode size={24}/> : <CiLight size={24}/> } 
          </p>
        </div>
      </nav>

      <nav
        className={`${
          isMenuOpen ? "left-0" : "hidden"
        } fixed top-0 left-0 w-screen h-screen sm:h-auto flex bg-red-500 sm:bg-[#3572EF] transition-all duration-300 ease-in-out pt-8 sm:p-8`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-7 w-full items-center text-center h-full justify-center"
        onClick={ ()=> { handleChangeMenuVisibility() } }
        >
          <LI title="Inicio" redirection="/Ciudades" />
          <LI title="Ciudades" redirection="/Ciudades" />
          <LI title="Cultura" redirection="/Cultura" />
          <LI title="Mapa" redirection="/Mapa" />
          <LI title="Curiosidades" redirection="/Curiosidades" />
          <LI title="Acerca De" redirection="/AcercaDe" />

          <li className="hidden sm:flex flex-row items-center justify-around">
            <p className="m-1">ES </p>
            <p className="m-1">Día</p>
          </li>
        </ul>
      </nav>
    </>
  );
}

