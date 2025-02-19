import { useSelector } from "react-redux";
import { Star } from "../../Common"
import { CityInterface } from "../controller/citiesInterface";
import { cityLanguage } from "./language/language";
import { RootState } from "../../app/Store/store";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props{
    city: CityInterface;
}


export function CityCard({city}:Props){
    
    const globalCubaImages = "cuba/cities"
    const folder = city.imageUrl.split(".");
    const url = `${globalCubaImages}/${folder[0]}/${city.imageUrl}`

    const languageEs = useSelector((state: RootState) => state.common.language);
    const currentTexts = languageEs ? cityLanguage.es : cityLanguage.en; 

    const [isHoverEnabled, setIsHoverEnabled] = useState(true);
    const cityRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (cityRef.current) {
        const { top } = cityRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsHoverEnabled(top > windowHeight * 0.3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    let stars = [];

    for (let index = 0; index < 10; index++) {
        if(index < city.tourismRating){
            if(index < city.tourismRating - 0.5){
                stars[index] = 1;
            } else {
                stars[index] = 2;
            }
        } else {
            stars[index] = 3;
        }
    }

    return(
        <>
        <div
        ref={cityRef}
      className={`flex flex-col md:flex-row p-4 mx-10 md:mx-8 mt-8 border border-black text-black dark:border-white dark:text-white rounded-xl transition-transform duration-300 ${
        isHoverEnabled ? "hover:shadow-lg hover:scale-105" : ""
      }`} 
      onClick={ ()=> { navigate(`/Ciudad/${city.id}`) } }
      >
            <div className="flex w-auto md:w-1/2 max-h-96 min-h-40 md:min-h-80 rounded-xl">
                <img 
                className="flex object-cover rounded-xl"
                 src={url}
                alt="It is not posibble to view the photo" />
            </div>
            <div className="flex flex-col w-auto md:w-1/2 p-2 gap-4 items-center text-center place-content-center">
                <p className="text-3xl">{city.name}</p>
                <p> { currentTexts.population } : {city.population}</p>
                <p className="mr-1"> { currentTexts.tourismRating } </p>
                <div className="flex">
                { stars.map( (star, index)=> {
                    return(
                        <Star key={index} number={star} />
                    )
                } ) }
                </div>
                 <p>{city.shortDescription}</p>
            </div>
        </div>
        </>
    )
}