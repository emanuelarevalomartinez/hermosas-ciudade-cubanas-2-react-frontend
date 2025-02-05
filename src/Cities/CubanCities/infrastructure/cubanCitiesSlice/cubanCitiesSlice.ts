import { createSlice } from "@reduxjs/toolkit";
import { cubanCitiesData } from "../data/cubanCitiesData";


export const cubanCitiesSlice = createSlice({
    name: "cities",
    initialState: cubanCitiesData,
    reducers: {
         addCubanCity: (state, action) => {
              // state.push(action.payload);
               return [...state, action.payload];
         }
    }
})

export const { addCubanCity } = cubanCitiesSlice.actions;
export default cubanCitiesSlice.reducer;
