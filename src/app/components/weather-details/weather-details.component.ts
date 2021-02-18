import { Component, Input } from '@angular/core';
import { WeatherDetails } from 'src/app/models/WeatherDetails';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent{
  @Input() weather: WeatherDetails;
  constructor() { }
}
