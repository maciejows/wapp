import { WeatherResult } from './WeatherResult';

describe('WeatherResult data model', () => {
  it('create an instance with data beeing "{}"', () => {
    const weatherResult = new WeatherResult({});
    expect(weatherResult).toBeTruthy();
    expect(weatherResult.currentTime).toBe('');
    expect(weatherResult.locationTitle).toBe('');
    expect(weatherResult.sunRise).toBe('');
    expect(weatherResult.sunSet).toBe('');
    expect(weatherResult.timezone).toBe('');
    expect(weatherResult.weatherDetails).toEqual([]);
  });

  it('create an instance with data beeing "undefined"', () => {
    const weatherResult = new WeatherResult(undefined);
    expect(weatherResult).toBeTruthy();
    expect(weatherResult.currentTime).toBe('');
    expect(weatherResult.locationTitle).toBe('');
    expect(weatherResult.sunRise).toBe('');
    expect(weatherResult.sunSet).toBe('');
    expect(weatherResult.timezone).toBe('');
    expect(weatherResult.weatherDetails).toEqual([])
  });

  it('create an instance with truthy data', () => {
      const mockData = {
        title: 'Warsaw',
        time: 'time',
        sun_rise: '06:36',
        sun_set: '17:12',
        timezone: 'Warsaw/European',
        consolidated_weather: [{}, {}, {}]
      }
    const weatherResult = new WeatherResult(mockData);
    expect(weatherResult).toBeTruthy();
    expect(weatherResult.locationTitle).toBe('Warsaw');
    expect(weatherResult.currentTime).toBe('time');
    expect(weatherResult.sunRise).toBe('06:36');
    expect(weatherResult.sunSet).toBe('17:12');
    expect(weatherResult.timezone).toBe('Warsaw/European');
    expect(weatherResult.weatherDetails.length).toBe(3);
  });


});
