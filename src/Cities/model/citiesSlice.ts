

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { citiesData } from "../controller/citiesData";
import { citiesApi } from "../controller/citiesApi";
import { RootState } from "../../app/Store/store";

export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    return citiesApi.getCities();
});


export const citiesSlice = createSlice({
    name: "cities",
    initialState: citiesData,
    reducers: { },
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

 export const {  } = citiesSlice.actions;
export default citiesSlice.reducer;
