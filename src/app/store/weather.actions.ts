import { createAction, props} from '@ngrx/store';
import { Weather } from '../models/Weather';

export const getLocationWoeid = createAction('[Weather service] Get Location Woeid', props<{location: String}>());
export const getLocationWoeidSuccess = createAction('[Weather service] Get Location Woeid Success', props<{data: Weather}>());
export const getLocationWoeidError = createAction('[Weather service] Get Location Woeid Error', props<{error: String}>());

export const getWeatherDetails = createAction('[Weather service] Get weather details', props<{woeid: String}>());
export const getWeatherDetailsSuccess = createAction('[Weather service] Get weather details Success', props<{weather: Weather}>());
export const getWeatherDetailsError = createAction('[Weather service] Get weather details Error', props<{error: String}>());
