import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { getLocationWoeid, getLocationWoeidError, getWeatherDetails, getWeatherDetailsError, getWeatherDetailsSuccess } from './weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
        ) {}

    getLocationWoeid$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getLocationWoeid),
            mergeMap((action) => 
                this.weatherService.getLocationWoeid(action.location).pipe(
                    map((data) => 
                        getWeatherDetails({woeid: data[0]['woeid']})    
                    ),
                    catchError((error) => 
                        of(getLocationWoeidError({error: error}))
                    )
                )
            )
        )
    );

    getLocationWeather$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getWeatherDetails),
            mergeMap((action) => 
                this.weatherService.getWeatherDetails(action.woeid).pipe(
                    map((data) => 
                        getWeatherDetailsSuccess({weather: data}) 
                    ),
                    catchError((error) => 
                        of(getWeatherDetailsError({error: error}))
                    )
                )
            )
        )
    );
}