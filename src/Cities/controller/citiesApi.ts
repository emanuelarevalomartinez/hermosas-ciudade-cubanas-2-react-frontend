import { citiesData } from "./citiesData";


export const citiesApi = {
    getCities: ()=> Promise.resolve(citiesData),
}