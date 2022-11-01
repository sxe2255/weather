import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ResponseWeather, ResponseWeatherList } from 'src/app/interfaces/response-weather';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnChanges {
  @Input() weatherDay: ResponseWeatherList;

  weatherWeekNew:ResponseWeatherList[];

  day:string;

  srcLink: string;

  response: ResponseWeather;

  temperature: string;

  constructor() { }

  newItemEvent: any;

  ngOnChanges() {
    this.day = this.weatherDay?.dt_txt;
    this.temperature = this.weatherDay?.main.temp;
    this.srcLink = this.weatherDay?.weather[0].main;
  }

  getConsole() {
    // console.log(this.weatherWeek)
  }
}
