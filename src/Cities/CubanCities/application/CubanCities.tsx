import { useDispatch, useSelector } from "react-redux";
import { PageDimensions } from "../../../Common";
import { City as CityInterface } from "../infrastructure/data/cubanCitiesData";
import { useState } from "react";
import { addCubanCity } from "../infrastructure/cubanCitiesSlice/cubanCitiesSlice";
import { City } from "./City";
import { AppDispatch, RootState } from "../../../app/Store/store";


export function CubanCities(){

  const [newCity, setnewCity] = useState("");

  //* // FIXME tengo que quitar de aqui lo de añadir ciudad que no va
  //* // FIXME arreglar el componente city para mostrar las ciudades con su foto
  //* // FIXME cambiar el nombre de la interface City
  //* // FIXME comenzar a cambiar las cosas del useContext del navBar como el lenguaje para  redux toolkit
  //* //FIXME refactorizar el codigo de navBar

  //const cities: CityInterface[] = useSelector( state => state.cities );
  const cities: CityInterface[] = useSelector((state: RootState) => state.cities);

  // const citiesDispatch = useDispatch();
  const citiesDispatch = useDispatch<AppDispatch>(); 

  function addCity(){
       citiesDispatch( addCubanCity({ name: newCity }) );
       setnewCity("");
       console.log(cities);
       
  }

return(
    <>
      <PageDimensions>
        <div>
        <p>Ciudades cubanas</p>
        <div>
          add city
          <input type="text" 
          onChange={ (e)=> setnewCity(e.target.value) }
          value={newCity}
          />
          <div>
          <button onClick={ ()=> { addCity() } } >enviar</button>
          </div>
         
        </div>
        <div>
          {
             cities.map( (city,index) => {
              return(
                 <City key={index} city={city} />
              ) 
             } )
          }
        </div>
       </div>
      </PageDimensions>
    </>
    
)

}