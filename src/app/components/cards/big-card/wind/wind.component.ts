import { Component, Input, OnChanges } from '@angular/core';
import { ResponseWeatherList } from 'src/app/interfaces/response-weather';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent implements OnChanges {
  @Input() weatherDay: ResponseWeatherList;

  speed: number;

  deg: number;

  gust: number;

  ngOnChanges() {
    // console.log(this.weatherDay.main.feels_like)
    this.speed = this.weatherDay?.wind.speed;
    this.deg = this.weatherDay?.wind.deg;
    this.gust = this.weatherDay?.wind.gust;
  }

  constructor() { }



}
