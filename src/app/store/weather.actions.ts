import { createAction, props} from '@ngrx/store';
import { Weather } from '../models/Weather';

export const loadWeather = createAction('[Weather service] Load Weather', props<{location: String}>());
export const loadWeatherSuccess = createAction('[Weather service] Load Weather Success', props<{data: Weather}>());
export const loadWeatherError = createAction('[Weather service] Load Weather Error', props<{error: String}>());
