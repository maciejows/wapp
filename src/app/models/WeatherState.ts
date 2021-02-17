import { WeatherResult } from './WeatherResult';
import { Location } from './Location';

export interface WeatherState {
    locations: Location[];
    weather: WeatherResult,
    isLoading: Boolean,
    error: string,
}