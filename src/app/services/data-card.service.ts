import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseWeather} from 'src/app/interfaces/response-weather';

@Injectable({
  providedIn: 'root',
})
export class DataCardsService {

  constructor(private http: HttpClient) {}



  apiKey = 'e2db9343c92efb30f508113f71f2cc3d';


  getWether(): Observable<ResponseWeather> {
    return this.http.get<ResponseWeather>(`https://api.openweathermap.org/data/2.5/forecast?lat=53.9&lon=27.5667&appid=${this.apiKey}`);
  }

}
