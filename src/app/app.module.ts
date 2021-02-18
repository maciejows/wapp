import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { materialImports } from './material-imports';
import { weatherReducer } from './store/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/weather.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { TimeFromDatePipe } from './pipes/time-from-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    NavbarComponent,
    WeatherDisplayComponent,
    DailyWeatherComponent,
    CustomDatePipe,
    WeatherDetailsComponent,
    TimeFromDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({weather: weatherReducer}),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
   [...materialImports],
   FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
