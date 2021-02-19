import { WeatherDetails } from './WeatherDetails';

describe('WeatherDetails data model', () => {
  it('create an instance with data beeing "{}"', () => {
    const details = new WeatherDetails({});
    expect(details).toBeTruthy();
    expect(details.airPressure).toBe("");
    expect(details.applicableDate).toBe("");
    expect(details.temp).toBe(0);
    expect(details.weatherStateImg).toBe("");
    expect(details.weatherStateName).toBe("");
    expect(details.windSpeed).toBe(0);
  });

  it('create an instance with data beeing "undefined"', () => {
    const details = new WeatherDetails(undefined);
    expect(details).toBeTruthy();
    expect(details.airPressure).toBe("");
    expect(details.applicableDate).toBe("");
    expect(details.temp).toBe(0);
    expect(details.weatherStateImg).toBe("");
    expect(details.weatherStateName).toBe("");
    expect(details.windSpeed).toBe(0);
  });

  it('create an instance with truthy data', () => {
    const mockData = {
        air_pressure: "1024",
        applicable_date: "2020-04-06",
        the_temp: 13,
        weather_state_abbr: "sn",
        weather_state_name: "state",
        wind_speed: 5
    };
    const details = new WeatherDetails(mockData);
    expect(details).toBeTruthy();
    expect(details.airPressure).toBe("1024");
    expect(details.applicableDate).toBe("2020-04-06");
    expect(details.temp).toBe(13);
    expect(details.weatherStateImg).toBe("https://www.metaweather.com/static/img/weather/sn.svg");
    expect(details.weatherStateName).toBe("state");
    expect(details.windSpeed).toBe(5);
  });


});
