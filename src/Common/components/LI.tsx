

import { NavLink } from "react-router-dom";


interface Props {
    title: string;
    redirection: string;
    click?: () => void;
    active?: boolean;
  }
  
  export function LI({ title, redirection, click, active }: Props) {
    return (
      <>
        <NavLink
          className={`flex m-1 sm:m-0 mx-10 sm:mx-1 border-white border-2 sm:border-0 h-12 sm:h-full py-2 justify-center 
            cursor-pointer 
            ${
              active
                ? "dark:bg-[#2562dc] bg-[#454545] text-white border-transparent sm:rounded-t-3xl"
                : "dark:text-[#3ABEF9] text-white dark:hover:bg-[#2562dc] dark:hover:text-white hover:bg-[#454545] hover:border-transparent sm:border-b-2 sm:hover:rounded-t-3xl"
            }`}
          onClick={() => {
            if (click) click();
          }}
          to={redirection}
        >
          {title}
        </NavLink>
      </>
    );
  }
  