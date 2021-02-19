import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
         HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpTestingController: HttpTestingController;
  let proxyUrl = 'https://mo-wapp-proxy.herokuapp.com';
  let apiUrl = `${proxyUrl}/https://www.metaweather.com/api/location`;
  
   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    weatherService = TestBed.inject(WeatherService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });
  
  it("Should return Berlin's woeid which is '638242'", () => {
    weatherService.getLocationWoeid("Berlin").subscribe(
        data => expect(data.woeid).toEqual("638242")
    );

    const req = httpTestingController.expectOne(`${apiUrl}/search/?query=Berlin`);
    expect(req.request.method).toEqual('GET');
    req.flush({woeid: "638242"});
  });

  it("Should return Berlin's weather data", () => {
    const mockData = {
        title: "Berlin"
    }
    weatherService.getWeatherDetails("638242").subscribe(
        data => expect(data.title).toEqual("Berlin")
    );

    const req = httpTestingController.expectOne(`${apiUrl}/638242`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });
});
