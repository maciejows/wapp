import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherDetails } from 'src/app/models/WeatherDetails';
import { WeatherState } from 'src/app/models/WeatherState';
import { selectWeatherDetails } from 'src/app/store/weather.actions';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent {
  @Input() weather: WeatherDetails;
  @Input() selectedWeather: WeatherDetails;
  
  constructor(private store: Store<{weather: WeatherState}>) { }

  // Select daily weather to display with details
  selectWeatherDetails(){
    this.store.dispatch(selectWeatherDetails({details: this.weather}));
  }

}
