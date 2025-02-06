import { useSelector } from "react-redux";
import { PageDimensions } from "../../../Common";
import { CityInterface } from "../infrastructure/data/cubanCitiesData";
import { City } from "./City";
import { RootState } from "../../../app/Store/store";


export function CubanCities(){

  //* // FIXME arreglar el componente city para mostrar las ciudades con su foto
  //* //FIXME refactorizar el codigo de navBar

  //const cities: CityInterface[] = useSelector( state => state.cities );
  const cities: CityInterface[] = useSelector((state: RootState) => state.cities);
 


return(
    <>
      <PageDimensions>
        
          {/* {
             cities.map( (city,index) => {
              return(
                 <City key={index} city={city} />
              ) 
             } )
          } */}
          <City/>
      </PageDimensions>
    </>
    
)

}