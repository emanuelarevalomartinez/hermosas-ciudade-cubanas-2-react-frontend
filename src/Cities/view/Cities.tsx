import { useSelector } from "react-redux";
import { PageDimensions } from "../../Common";
import { CityCard } from "./CityCard";
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
                   <CityCard key={index} city={city} />
                ) 
               } )
            }
        </PageDimensions>
      </>
    )

   
}