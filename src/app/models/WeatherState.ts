import { Weather } from './Weather';
import { Location } from './Location';

export interface WeatherState {
    locations: Location[];
    weather: Weather,
    isLoading: Boolean,
    error: string,
}