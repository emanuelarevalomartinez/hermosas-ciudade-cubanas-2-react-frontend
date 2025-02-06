
import { createSlice } from '@reduxjs/toolkit';

interface CommonState {
    lightTheme: boolean;
    language: 'es' | 'en';
  }

  const getInitialTheme = (): boolean => {
    const storedTheme = localStorage.getItem("lightTheme");
    if (storedTheme !== null) {
      return storedTheme === "true";
    }
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

const initialState: CommonState = {
  lightTheme: getInitialTheme(),
  language: localStorage.getItem('language') as 'es' | 'en' || 'es',
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    handleChangeLightStatus: (state) => {
    const newLightTheme = !state.lightTheme;
    localStorage.setItem('lightTheme', newLightTheme.toString());
    return { 
      ...state,
      lightTheme: newLightTheme,
    };
    },
    handleChangeLanguage: (state, action) => {
        const newLanguage = action.payload;
        if(newLanguage == true){
            localStorage.setItem('language', "es");
        } else if(newLanguage == false){
            localStorage.setItem('language', "en");
        }
        return{
            ...state,
            language: newLanguage,
        }
      }
  }
});

export const { handleChangeLightStatus, handleChangeLanguage } = commonSlice.actions;
export default commonSlice.reducer;