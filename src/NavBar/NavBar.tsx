
import { LI } from "../Common";

export function NavBar(){


return(
    <>
    <nav className="flex bg-[#3572EF]">
        <ul className="flex m-4">
            <LI title="HOME" redirection=""/>
            <LI title="Ciudades Cubanas" redirection="/Ciudades"/>
          {/* <li><Link to="/"> HOME </Link></li>
          <li><Link to="/">Ciudades</Link></li>
          <li><Link to="/">Cultura</Link></li>
          <li><Link to="/">Mapa</Link></li>
          <li><Link to="/">Datos Curiosos</Link></li>
          <li><Link to="/">Acerca De</Link></li> */}
        </ul>
      </nav>
    </>
)

}