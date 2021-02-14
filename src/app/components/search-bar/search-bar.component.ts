import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  searchLocation(query: String) {
    this._weatherService.getLocationWoeid(query).subscribe(data => console.log(data));
  }
}
