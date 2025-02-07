import { useSelector } from "react-redux";
import { PageDimensions } from "../../Common";
import { City } from "./City";
import { CityInterface } from "../controller/citiesInterface";
import { RootState } from "../../app/Store/store";


export function Cities(){

    // const dispatch: AppDispatch = useDispatch();
    const cities: CityInterface[] = useSelector((state: RootState) => state.cities);

    // useEffect(() => {
    //   dispatch(fetchCities());
    // }, [dispatch]);

    return(
        <>
        <PageDimensions>
          
            {
               cities.map( (city,index) => {
                return(
                   <City key={index} city={city} />
                ) 
               } )
            }
            {/* <City city={cities[2]}/> */}
        </PageDimensions>
      </>
    )

   
}