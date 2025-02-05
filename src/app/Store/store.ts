import { configureStore } from "@reduxjs/toolkit";
import navBarSlice from "../../NavBar/infrastructure/navBarFeatures/navBarSlice";
import cubanCitiesSlice from "../../Cities/CubanCities/infrastructure/cubanCitiesSlice/cubanCitiesSlice";

const store = configureStore({
   reducer: {
     navBar: navBarSlice,
     cities: cubanCitiesSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
