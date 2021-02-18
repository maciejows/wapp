import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherDetails } from 'src/app/models/WeatherDetails';
import { WeatherResult } from 'src/app/models/WeatherResult';
import { WeatherState } from 'src/app/models/WeatherState';
import { getLocationWoeid } from 'src/app/store/weather.actions';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit{
  isLoading$: Observable<Boolean>;
  weatherResult$: Observable<WeatherResult>;
  selectedWeather$: Observable<WeatherDetails>;
  
  constructor(private store: Store<{ weather: WeatherState }>) {}
  ngOnInit(){
    this.store.dispatch(getLocationWoeid({location: "warsaw"}));
    this.isLoading$ = this.store.select(state => state.weather.isLoading);
    this.weatherResult$ = this.store.select(state => state.weather.weather);
    this.selectedWeather$ = this.store.select(state => state.weather.selectedDetails);
  }
}
