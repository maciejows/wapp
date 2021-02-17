import { createReducer, Action, on } from '@ngrx/store'
import { getWeatherDetails, getWeatherDetailsSuccess, getWeatherDetailsError, searchForLocationsSuccess, searchForLocationsError, getLocationWoeidError} from './weather.actions';
import { WeatherState } from '../models/WeatherState';
import { Location } from '../models/Location';

export const initialState: WeatherState = {
    locations: [],
    weather: {
        locationTitle: '',
        currentTime: '',
        sunRise: '',
        sunSet: '',
        weatherDetails: []
    },
    isLoading: false,
    error: ''
}

const _weatherReducer = createReducer(
    initialState,
    on(searchForLocationsSuccess, (state, { locations }) => ({...state, locations: locations})),
    on(searchForLocationsError, (state, {error}) => ({...state, error: error })),
    on(getWeatherDetails, (state) => ({...state, isLoading: true})),
    on(getWeatherDetailsSuccess, (state, {weather}) => ({...state, weather: weather, isLoading: false })),
    on(getWeatherDetailsError, (state, {error}) => ({...state, isLoading: false, error: error})),
    on(getLocationWoeidError, (state, {error}) => ({...state, error: error}))
    );
    
export function weatherReducer(state: WeatherState | undefined, action: Action): WeatherState {
    return _weatherReducer(state, action);
}