import { createReducer, Action, on } from '@ngrx/store'
import { getWeatherDetailsSuccess, getWeatherDetailsError } from './weather.actions';
import { WeatherState } from '../models/WeatherState';

export const initialState: WeatherState = {
    weather: {},
    error: ''
}

const _weatherReducer = createReducer(
    initialState,
    on(getWeatherDetailsSuccess, (state, {weather}) => ({...state, weather: weather })),
    on(getWeatherDetailsError, (state, {error}) => ({...state, error: error})),

);

export function weatherReducer(state: WeatherState | undefined, action: Action): WeatherState {
    return _weatherReducer(state, action);
}