import { WeatherResult } from './WeatherResult';
import { Location } from './Location';
import { WeatherDetails } from './WeatherDetails';

export interface WeatherState {
    locations: Location[];
    weather: WeatherResult,
    selectedDetails: WeatherDetails,
    isLoading: Boolean,
    error: string,
}