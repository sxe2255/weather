import { Component, EventEmitter, OnInit } from '@angular/core';
import { ResponseWeather, ResponseWeatherList, ResponseWeatherListMain, ResponseWeatherListFirstWeather } from 'src/app/interfaces/response-weather';
import { DataCardsService } from 'src/app/services/data-card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  // changeDetection посмотреть!!!!
})
export class CardsComponent implements OnInit {

  constructor(private datacard: DataCardsService) { }

  weatherWeek: ResponseWeatherList[];

  weatherRes: ResponseWeather;

  src?: string = '';

  tempKelvin: number;

  temperature: string;

  date: Date;

  weatherDay: ResponseWeatherList;

  dataSmall: ResponseWeatherList;

  ngOnInit(): void {
    this.datacard.getWether().subscribe((response)=>{
      this.date = new Date(response.list[0].dt_txt);
      this.weatherRes = response;
      this.src = `./assets/images/${this.weatherRes.list[0].weather[0].main}.png`;
      this.temperature = response.list[0].main.temp;
      this.weatherDay = response.list[0];
      this.getListWeek(this.weatherRes);
    });
  }

  // getTemp(tempKelvin: number){
  //   this.temperature = Number(tempKelvin) - 273,15;
  //   return this.temperature
  // }
  getListWeek(weatherRes: ResponseWeather) {

    this.weatherWeek = weatherRes.list.filter((el)=>{
      let dateEl = new Date(el.dt_txt);
      if (dateEl.getTime() == this.date.getTime()) {
        this.date.setDate(this.date.getDate() + 1);
        return el;
      }
      return false;
    });
  }

  onChanged(data:ResponseWeatherList) {
    this.weatherDay = data;
  }
}
