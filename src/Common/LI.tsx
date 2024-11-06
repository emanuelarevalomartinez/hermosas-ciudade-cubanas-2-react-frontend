import { Link } from "react-router-dom";


interface Props{
    title:string;
    redirection:string;
}

export function LI({title,redirection}:Props){
    return (
        <>
        <li className="flex m-1"><Link to={redirection}> {title} </Link></li>
        </>
    )
}