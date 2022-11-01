import { Component, Input, OnChanges } from '@angular/core';
import { ResponseWeatherList } from 'src/app/interfaces/response-weather';

@Component({
  selector: 'app-feel',
  templateUrl: './feel.component.html',
  styleUrls: ['./feel.component.css'],
})
export class FeelComponent implements OnChanges {
  @Input() weatherDay: ResponseWeatherList;

  feels: string;

  tempMin: string;

  tempMax: string;

  constructor() { }

  ngOnChanges() {
    // console.log(this.weatherDay.main.feels_like)
    this.feels = this.weatherDay?.main.feels_like;
    this.tempMin = this.weatherDay?.main.temp_min;
    this.tempMax = this.weatherDay?.main.temp_max;
  }



}
