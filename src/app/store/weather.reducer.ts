import { createReducer, Action, on } from '@ngrx/store'
import { getLocationWoeid, getWeatherDetailsSuccess, searchForLocationsSuccess, getLocationWoeidError, selectWeatherDetails, searchForLocationsError, getWeatherDetailsError} from './weather.actions';
import { WeatherState } from '../models/WeatherState';

export const initialState: WeatherState = {
    locations: [],
    weather: undefined,
    selectedDetails: undefined,
    isLoading: false,
    error: ''
}

const _weatherReducer = createReducer(
    initialState,
    on(searchForLocationsSuccess, (state, { locations }) => ({...state, locations: locations})),
    on(searchForLocationsError, (state, {error}) => ({...state, isLoading: false, error: "Not found"})),
    on(getLocationWoeid, (state) => ({...state, isLoading: true})),
    on(getWeatherDetailsSuccess, (state, {weather}) => ({...state,  error: "", weather: weather, selectedDetails: weather.weatherDetails[0], isLoading: false})),
    on(getWeatherDetailsError, (state, {error}) => ({...state, isLoading: false, error: error})),
    on(getLocationWoeidError, (state, {error}) => ({...state, error: error})),
    on(selectWeatherDetails, (state, {details}) => ({...state, selectedDetails: details}))
    );
    
export function weatherReducer(state: WeatherState | undefined, action: Action): WeatherState {
    return _weatherReducer(state, action);
}