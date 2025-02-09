import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from '../../Cities/model/citiesSlice'
import commonSlice from "../../Common/commonSlice/commoSlice";


const store = configureStore({
   reducer: {
     cities: citiesSlice,
     common: commonSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
