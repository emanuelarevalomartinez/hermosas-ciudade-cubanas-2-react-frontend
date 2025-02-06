import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "../../NavBar/infrastructure/navBarFeatures/navBarSlice";
import cubanCitiesSlice from "../../Cities/CubanCities/infrastructure/cubanCitiesSlice/cubanCitiesSlice";
import commonSlice from "../../Common/commonSlice/commoSlice";


const store = configureStore({
   reducer: {
     navBar: navBarSlice,
     cities: cubanCitiesSlice,
     common: commonSlice
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
