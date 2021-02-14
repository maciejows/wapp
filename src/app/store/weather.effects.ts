import { Injectable } from "@angular/core";
import { Actions } from '@ngrx/effects';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class WeatherEffects {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
        ) {}
}