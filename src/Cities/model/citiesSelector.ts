

import { createSelector } from 'reselect';
import { RootState } from '../../app/Store/store';

const selectCities = (state: RootState) => state.cities;

export const selectCityById = (state: RootState, id: number) => createSelector(
    [selectCities],
    (cities) => cities.find(city => city.id === id) || null
)(state);

