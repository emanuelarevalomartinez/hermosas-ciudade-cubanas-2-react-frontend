import { useSelector } from "react-redux";
import { Star } from "../../Common"
import { CityInterface } from "../controller/citiesInterface";
import { cityLanguage } from "./language/language";
import { RootState } from "../../app/Store/store";
import { useEffect, useRef, useState } from "react";

interface Props{
    city: CityInterface;
}


export function City({city}:Props){
    
    const globalCubaImages = "public/cuba/"

    const languageEs = useSelector((state: RootState) => state.common.language);
    const currentTexts = languageEs ? cityLanguage.es : cityLanguage.en; 

    const [isHoverEnabled, setIsHoverEnabled] = useState(true);
  const cityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cityRef.current) {
        const { top } = cityRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsHoverEnabled(top > windowHeight * 0.2);
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
      }`} >
            <div className="flex w-auto md:w-1/2 max-h-96 rounded-xl">
                <img 
                className="flex object-contain rounded-xl"
                src={`${globalCubaImages}La_Habana/wallhaven-e77zk8_1920x1080.png`} 
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