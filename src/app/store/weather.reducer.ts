import { createReducer, Action, on } from '@ngrx/store'
import { loadWeatherSuccess, loadWeatherError } from './weather.actions';
import { WeatherState } from '../models/WeatherState';

export const initialState: WeatherState = {
    weather: undefined,
    error: ''
}

const _weatherReducer = createReducer(
    initialState,
    on(loadWeatherSuccess, (state, {data}) => ({...state, weather: data })),
    on(loadWeatherError, (state, {error}) => ({...state, error: error}))
);

export function weatherReducer(state: WeatherState, action: Action): WeatherState {
    return _weatherReducer(state, action);
}