import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

interface Props{
    number: number;
}


export function Star({number}:Props){

    return(
        <>
        { number == 1 ? <FaStar /> :  number == 2 ? <FaStarHalfAlt/> : <FaRegStar/> }
        </>
    )
}