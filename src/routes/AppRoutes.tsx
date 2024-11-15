
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { CubanCities } from "../Cuba/Cities";
import { CubanCulture } from "../Culture";
import { CubanMap } from "../Maps";
import { CubanCuriosity } from "../Curiosity";
import { AboutUs } from "../AboutUs";


export function AppRoutes(){

return(
       <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Ciudades" element={ <CubanCities/> }/>
          <Route path="/Cultura" element={ <CubanCulture/> }/>
          <Route path="/Mapa" element={ <CubanMap/> }/>
          <Route path="/Curiosidades" element={ <CubanCuriosity/> }/>
          <Route path="/AcercaDe" element={ <AboutUs/> }/>
       </Routes>
)


}