import { useParams } from "react-router-dom";
import { PageDimensions } from "../../Common";
import { RootState } from "../../app/Store/store";
import { useSelector } from "react-redux";
import { selectCityById } from "../model/citiesSelector";


export function CityView(){

const { id } = useParams();
    const city = useSelector((state: RootState) => selectCityById(state, id ? parseInt(id) : 0));

    return(
        <>
        <PageDimensions>
            <div>Ciudad: {city?.name}</div>
            <div className="flex w-full">
            <p className="break-words">Foto tomada de : {city?.reference}</p>
            </div>
        </PageDimensions>
        </>
        
    )
}