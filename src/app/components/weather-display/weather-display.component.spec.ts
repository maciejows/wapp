import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from 'src/app/store/weather.reducer';

import { WeatherDisplayComponent } from './weather-display.component';

describe('WeatherDisplayComponent', () => {
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({ weather: weatherReducer })],
      declarations: [ WeatherDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});