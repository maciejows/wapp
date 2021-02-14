import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherState } from 'src/app/models/WeatherState';
import { WeatherService } from 'src/app/services/weather.service';
import { getLocationWoeid } from 'src/app/store/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  locations$ = this.store.select(state => state.weather);
  constructor(
    private store: Store<{ weather: WeatherState }>,
    private _weatherService: WeatherService
    ) {}

  ngOnInit(): void {
  }

  searchLocation(query: String) {
    this.store.dispatch(getLocationWoeid({location: query}));

    //this._weatherService.getLocationWoeid(query).subscribe(data => console.log(data));
  }
}
