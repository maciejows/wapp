import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private proxyUrl = 'https://mo-wapp-proxy.herokuapp.com';
  private apiUrl = `${this.proxyUrl}/https://www.metaweather.com/api/location`;
  
  constructor(private _http: HttpClient) { }
  // Get location woeid (Where On Earth Id)
  getLocationWoeid(query: String): Observable<any> {
    return this._http.get(`${this.apiUrl}/search/?query=${query}`);
  }
  getWeatherDetails(woeid: String): Observable<any>{
    return this._http.get(`${this.apiUrl}/${woeid}`);
  }
}
