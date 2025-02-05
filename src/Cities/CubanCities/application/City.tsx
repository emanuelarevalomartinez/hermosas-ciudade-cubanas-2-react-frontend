import { City as CityInterface } from "../infrastructure/data/cubanCitiesData"

interface Props{
    city: CityInterface,
}


export function City({city}:Props){
    return(
        <>
        <div className="flex">
         <p>{city.name}</p>
         <p>{city.id}</p>
         <p>{city.population}</p>
         <p>{city.province}</p>
         <p>{city.tourismRating}</p>
         <p>{city.temperatureRange}</p>
         <p>{city.foundedYear}</p>
        </div>
        </>
        
    )
}