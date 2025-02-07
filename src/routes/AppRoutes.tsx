
import { Route, Routes } from "react-router-dom";
import {
   Home,
   Cities,
   NotFoundPage,
   CubanCulture,
   AboutUs,
   CubanCuriosity,
   CubanMap,
 } from "../index";


export function AppRoutes(){

return(
       <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Ciudades" element={ <Cities/> }/>
          <Route path="/Cultura" element={ <CubanCulture/> }/>
          <Route path="/Mapa" element={ <CubanMap/> }/>
          <Route path="/Curiosidades" element={ <CubanCuriosity/> }/>
          <Route path="/AcercaDe" element={ <AboutUs/> }/>
          <Route path="*" element={ <NotFoundPage/> }/>
       </Routes>
)


}