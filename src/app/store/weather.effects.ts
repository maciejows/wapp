import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { searchForLocations, searchForLocationsError, getWeatherDetails, getWeatherDetailsError, getWeatherDetailsSuccess, searchForLocationsSuccess, getLocationWoeid } from './weather.actions';
import { Location } from '../models/Location';
import { WeatherResult } from '../models/WeatherResult';

@Injectable()
export class WeatherEffects {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService,
        ) {}

    searchForLocations$ = createEffect(() => 
        this.actions$.pipe(
            ofType(searchForLocations),
            mergeMap((action) => 
                this.weatherService.getLocationWoeid(action.location).pipe(
                    map((data) => 
                        searchForLocationsSuccess({locations: Location.mapMultipleLocations(data)})    
                    ),
                    catchError((error) => 
                        of(searchForLocationsError({error: error}))
                    )
                )
            )
        )
    );

    getLocationWoeid$ =  createEffect(() => 
        this.actions$.pipe(
            ofType(getLocationWoeid),
            mergeMap((action) => 
                this.weatherService.getLocationWoeid(action.location).pipe(
                    // Get the woeid and chain to "getLocationWeather$"
                    map((data) => {
                        if(data[0]?.woeid)
                            return getWeatherDetails({woeid: data[0]?.woeid})
                        else 
                            return getWeatherDetailsError({error: "Not found"})
                    }
                    ),
                    catchError((error) => 
                        of(searchForLocationsError({error: error}))
                    )
                )
            )
        )
    )

    getLocationWeather$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getWeatherDetails),
            mergeMap((action) => 
                this.weatherService.getWeatherDetails(action.woeid).pipe(
                    map((data) => 
                        getWeatherDetailsSuccess({weather: new WeatherResult(data)}) 
                    ),
                    catchError((error) => 
                        of(getWeatherDetailsError({error: error}))
                    )
                )
            )
        )
    );
}