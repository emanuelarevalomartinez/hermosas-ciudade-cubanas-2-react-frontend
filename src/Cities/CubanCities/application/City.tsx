import { CityInterface } from "../infrastructure/data/cubanCitiesData"

interface Props{
    city: CityInterface,
}


export function City(){

    const globalCubaImages = "public/cuba/"

    //wp9190148-havana-cuba-wallpapers.jpg

    //* FIXME me quede creando el componente city y asignandole los estilos que lleva
    //* FIXME Colocar el path para las imagenes segun provincia pero usando La Habana con La_Habana corregir eso

    return(
        <>
        <div className="flex flex-col">
            <div className="flex max-h-96">
                <img 
                className="flex object-contain"
                src={`${globalCubaImages}La_Habana/wallhaven-e77zk8_1920x1080.png`} 
                alt="It is not posibble to view the photo" />
            </div>
            <div className="flex mt-8 place-content-around">
                <p> Cantidad de habitantes: 40 000 000</p>
                <p>Calificación: w w w w w w w w w w </p>
            </div>
            <div className="mt-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in consequuntur ipsam minus beatae commodi numquam blanditiis sapiente odio dignissimos maiores eius consequatur voluptas pariatur quo aut ducimus at voluptatum.</p>
            </div>
         {/* <p>{city.name}</p>
         <p>{city.id}</p>
         <p>{city.population}</p>
         <p>{city.province}</p>
         <p>{city.tourismRating}</p>
         <p>{city.temperatureRange}</p>
         <p>{city.foundedYear}</p> */}

        </div>
        </>
        
    )
}