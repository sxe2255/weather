import { Component, Input, OnChanges } from '@angular/core';
import { ResponseWeatherList } from 'src/app/interfaces/response-weather';

@Component({
  selector: 'app-cloudiness',
  templateUrl: './cloudiness.component.html',
  styleUrls: ['./cloudiness.component.css']
})
export class CloudinessComponent implements OnChanges {
  @Input() weatherDay: ResponseWeatherList;

  cloudiness: number;

  ngOnChanges() {
    // console.log(this.weatherDay.main.feels_like)
    this.cloudiness = this.weatherDay?.clouds.all;
  }
  constructor() { }



}
