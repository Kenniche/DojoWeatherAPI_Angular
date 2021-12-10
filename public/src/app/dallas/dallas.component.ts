import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather: Object;
  avgTemp: number;
  minTemp: number;
  maxTemp: number;

  constructor(
  private http: HttpClient
  ) {}

  ngOnInit() {
    console.log("In the dallas component.")
    this.getWeatherData()
  }
  getWeatherData(){
    console.log("Getting weather data.");
    this.http.get("https://api.openweathermap.org/data/2.5/weather?id=4684888&appid=b7de8bc2623d60f171f12f12860f7dd6").subscribe(data => {
      console.log("Got our data!", data);
      this.weather = data;
      this.avgTemp = parseFloat(((this.weather['main']['temp'] - 273.15) * (9/5) + 32).toFixed(1))
      this.minTemp = parseFloat(((this.weather['main']['temp_min'] - 273.15) * (9/5) + 32).toFixed(1))
      this.maxTemp = parseFloat(((this.weather['main']['temp_max'] - 273.15) * (9/5) + 32).toFixed(1))
    })
  }
}
