import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherState } from 'src/app/models/WeatherState';
import { searchForLocations, getLocationWoeid } from 'src/app/store/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  locations$ = this.store.select(state => state.weather.locations);
  searchTerms = new Subject<string>();
  searchSubscription: Subscription;

  constructor(private store: Store<{ weather: WeatherState }>) {
    this.searchSubscription = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(term => {
      if(term != '') this.searchLocation(term)
    })
  }

  // Autocomplete
  onKeyUp(term: string){
    this.searchTerms.next(term);
  }

  // Used in autocomplete multiple locations search
  searchLocation(query: string) {
    this.store.dispatch(searchForLocations({location: query}))
  }

  // Used for retrieving specific woeid of location and weather details
  getLocationDetails(query: string) {
    this.store.dispatch(getLocationWoeid({location: query}))
  }

}
