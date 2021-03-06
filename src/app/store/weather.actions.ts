import { createAction, props} from '@ngrx/store';
import { WeatherResult } from '../models/WeatherResult';
import { Location } from '../models/Location';
import { WeatherDetails } from '../models/WeatherDetails';

export const searchForLocations = createAction('[Weather service] Search For Locations', props<{location: string}>());
export const searchForLocationsSuccess = createAction('[Weather service] Search For Locations Success', props<{locations: Location[]}>());
export const searchForLocationsError = createAction('[Weather service] Search For Locations Error', props<{error: string}>());

export const getLocationWoeid = createAction('[Weather service] Get Location Woeid', props<{location: string}>())
export const getLocationWoeidError = createAction('[Weather service] Get Location Woeid Error', props<{error: string}>());

export const getWeatherDetails = createAction('[Weather service] Get weather details', props<{woeid: string}>());
export const getWeatherDetailsSuccess = createAction('[Weather service] Get weather details Success', props<{weather: WeatherResult}>());
export const getWeatherDetailsError = createAction('[Weather service] Get weather details Error', props<{error: string}>());

export const selectWeatherDetails = createAction('[Weather service] Select Weather Details', props<{details: WeatherDetails}>());