
import { NavLink } from "react-router-dom";


interface Props{
    title:string;
    redirection:string;
    click?: ()=> void;
}

export function LI({title,redirection,click}:Props){
    return (
        <>
            <NavLink
            className="flex m-1 sm:m-0 sm:border-0 dark:text-[#3ABEF9] text-white sm:border-b-2 sm:mx-1 sm:rounded-none mx-10 border-2 border-white sm:border-[#3ABEF9] h-12 sm:h-full rounded-md py-2 justify-center dark:hover:text-white dark:hover:bg-[#2562dc] hover:text-lg cursor-pointer hover:bg-[#454545] hover:sm:bg-[#BA55D3] hover:text-white hover:border-transparent sm:hover:text-base sm:hover:rounded-t-3xl"
            onClick={()=> { if(click){ click() } }}
            to={redirection}> 
                 {title}
            </NavLink>
        </>
    )
}