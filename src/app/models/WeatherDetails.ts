export class WeatherDetails {
    weatherStateName: string;
    weatherStateImg: string;
    temp: number;
    applicableDate: string;
    windSpeed: number;
    airPressure: string;
    constructor(data: any){
        this.weatherStateName = data?.weather_state_name?? '';
        this.weatherStateImg = data?.weather_state_abbr
            ? `https://www.metaweather.com/static/img/weather/${data['weather_state_abbr']}.svg`
            : '';
        this.temp = data?.the_temp? Math.round(data['the_temp']) : 0;
        this.applicableDate = data?.applicable_date?? '';
        this.windSpeed = data?.wind_speed? Math.round(data['wind_speed']) : 0;
        this.airPressure = data?.air_pressure?? '';
    }
}