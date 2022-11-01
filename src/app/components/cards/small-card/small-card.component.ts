import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ResponseWeatherList } from 'src/app/interfaces/response-weather';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnChanges {
  @Input() data: ResponseWeatherList;

  @Output() newItemEvent = new EventEmitter();

  temperature: string;

  day:string;

  srcLink: string;

  constructor() { }

  ngOnChanges() {
    // console.log(this.click)
    this.day = this.data?.dt_txt;
    this.temperature = this.data?.main.temp;
    this.srcLink = this.data?.weather[0].main;
  }



  dataFormation(data: ResponseWeatherList) {
    // console.log(data)
    this.newItemEvent.emit(data);
  }
}
