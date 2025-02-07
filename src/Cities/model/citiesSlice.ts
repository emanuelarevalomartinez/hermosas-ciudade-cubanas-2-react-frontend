

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { citiesData } from "../controller/citiesData";
import { citiesApi } from "../controller/citiesApi";

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    return citiesApi.getCities();
});


export const citiesSlice = createSlice({
    name: "cities",
    initialState: citiesData,
    reducers: {},
    // reducers: {
    //      addCubanCity: (state, action) => {
    //           // state.push(action.payload);
    //            return [...state, action.payload];
    //      }
    // }
    extraReducers: ( builder ) => {
        builder
        .addCase(fetchCities.pending, () => {
          //  console.log("Fetching cities data...");
        })
        .addCase(fetchCities.fulfilled, (state, action) => {
          //  console.log("Data loaded successfully:", action.payload);
            return action.payload;
        })
        .addCase(fetchCities.rejected, (state, action) => {
          //  console.log("Failed to fetch data:", action.error);
        });
    },
})

// export const { addCubanCity } = citiesSlice.actions;
export default citiesSlice.reducer;
