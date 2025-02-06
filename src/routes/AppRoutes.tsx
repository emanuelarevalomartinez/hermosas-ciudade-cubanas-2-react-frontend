
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { CubanCuriosity } from "../Curiosity/CubanCuriosity";
import { AboutUs } from "../AboutUs";
import { CubanCities } from "../Cities/CubanCities";
import { CubanMap } from "../Maps/CubanMaps";
import { CubanCulture } from "../Culture/CubanCulture";
import { NotFoundPage } from "../Common";


export function AppRoutes(){

return(
       <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Ciudades" element={ <CubanCities/> }/>
          <Route path="/Cultura" element={ <CubanCulture/> }/>
          <Route path="/Mapa" element={ <CubanMap/> }/>
          <Route path="/Curiosidades" element={ <CubanCuriosity/> }/>
          <Route path="/AcercaDe" element={ <AboutUs/> }/>
          <Route path="*" element={ <NotFoundPage/> }/>

       </Routes>
)


}