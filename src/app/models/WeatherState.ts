import { WeatherResult } from './WeatherResult';
import { Location } from './Location';
import { WeatherDetails } from './WeatherDetails';

// Weather data model used in store reducer
export interface WeatherState {
    locations: Location[];
    weather: WeatherResult,
    selectedDetails: WeatherDetails,
    isLoading: Boolean,
    error: string,
}