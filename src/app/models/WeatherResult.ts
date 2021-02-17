import { WeatherDetails } from './WeatherDetails';

export class WeatherResult {
    locationTitle: string;
    currentTime: string;
    sunRise: string;
    sunSet: string;
    weatherDetails: WeatherDetails[];

    constructor(data: any) {
        this.locationTitle = data['title']?? '';
        this.currentTime = data['time']?? '';
        this.sunRise = data['sun_rise']?? '';
        this.sunSet = data['sun_set']?? '';
        if(data['consolidated_weather']) {
            this.weatherDetails = data['consolidated_weather'].map((el: any) => new WeatherDetails(el));
        } else {
            this.weatherDetails = []
        }
    }
}