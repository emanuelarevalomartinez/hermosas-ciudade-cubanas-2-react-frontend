import { useParams } from "react-router-dom";
import { PageDimensions } from "../../Common";
import { RootState } from "../../app/Store/store";
import { useSelector } from "react-redux";
import { selectCityById } from "../model/citiesSelector";
import { FcOrganization, FcConferenceCall, FcGlobe } from "react-icons/fc";
import {
  FaTemperatureThreeQuarters,
  FaRegFaceGrinStars,
} from "react-icons/fa6";

export function CityView() {
  const { id } = useParams();
  const city = useSelector((state: RootState) =>
    selectCityById(state, id ? parseInt(id) : 0)
  );

  console.log(city);

  const globalCubaImages =
    "/hermosas-ciudade-cubanas-2-react-frontend/cuba/cities";
  const folder = city?.imageUrl.split(".");
  const url = folder
    ? `${globalCubaImages}/${folder[0]}/${city?.imageUrl}`
    : "";

  //* TODO tengo añadir el responsive de esta vista
  //* TODO tengo que añadir la traduccion y el tema a este componente
  //* TODO tengo que refactorizar citiesCard y navbar

  return (
    <>
      <PageDimensions>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center flex-col grid-cols-2 row-start-1 col-start-1 col-span-2 h-60">
            <div className="flex justify-center items-center">
              <p className="flex items-center text-7xl">
                <FcGlobe /> {city?.name ? city.name : "---"}
              </p>
            </div>
          </div>

          <div className="grid-cols-1 row-start-1 col-start-3 col-span-1">
            <img
              className="object-cover min-h-48 rounded-xl"
              src={url}
              alt="Not possible to view the image"
            />
          </div>

          <div className="flex flex-col col-span-3 row-start-2 gap-4">
            <div className="flex gap-x-4 place-content-center my-4">
              <p className="flex items-center text-2xl">
                <FcOrganization /> Provincia{" "}
                {city?.province ? city.province : "---"}
              </p>

              <p className="flex items-center text-2xl">
                <FcConferenceCall /> Población:{" "}
                {city?.population ? city.population : "---"}
              </p>
              <p className="flex items-center text-2xl">
                <FaRegFaceGrinStars /> Calificación:{" "}
                {city?.tourismRating ? city.tourismRating : "---"}
              </p>

              <p className="flex items-center text-2xl">
                <FaTemperatureThreeQuarters /> Temperatura:{" "}
                {city?.temperatureRange
                  ? `${city.temperatureRange[0]} - ${city.temperatureRange[1]}`
                  : "---"}
              </p>
            </div>

            <p className="first-letter:text-5xl first-letter:text-black text-2xl">
              {city?.longDescription ? city.longDescription : "---"}
            </p>

            <div className="flex gap-x-2">
              <p>Fuente de la imagen:</p>
              <a className="text-red-600" href={city?.reference}>
                Haga click para conocer la fuente de la imagen.
              </a>
            </div>
          </div>
        </div>
      </PageDimensions>
    </>
  );
}
