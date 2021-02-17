import { createAction, props} from '@ngrx/store';
import { Weather } from '../models/Weather';
import { Location } from '../models/Location';

export const searchForLocations = createAction('[Weather service] Search For Locations', props<{location: string}>());
export const searchForLocationsSuccess = createAction('[Weather service] Search For Locations Success', props<{locations: Location[]}>());
export const searchForLocationsError = createAction('[Weather service] Search For Locations Error', props<{error: string}>());

export const getLocationWoeid = createAction('[Weather service] Get Location Woeid', props<{location: string}>())
export const getLocationWoeidError = createAction('[Weather service] Get Location Woeid Error', props<{error: string}>());

export const getWeatherDetails = createAction('[Weather service] Get weather details', props<{woeid: string}>());
export const getWeatherDetailsSuccess = createAction('[Weather service] Get weather details Success', props<{weather: Weather}>());
export const getWeatherDetailsError = createAction('[Weather service] Get weather details Error', props<{error: string}>());
