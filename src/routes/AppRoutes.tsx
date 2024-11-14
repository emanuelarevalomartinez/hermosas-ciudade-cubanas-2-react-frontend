
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { CubanCities } from "../Cuba/Cities";
import { CubanCulture } from "../Culture";


export function AppRoutes(){

return(
       <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Ciudades" element={ <CubanCities/> }/>
          <Route path="/Cultura" element={ <CubanCulture/> }/>
       </Routes>
)


}