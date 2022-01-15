import {Component, ViewChild} from "@angular/core";
import {HttpClient,HttpParams} from "@angular/common/http";
import {demoweather} from "../data/demoweather";
import {NgForm} from "@angular/forms";

@Component({
  selector: "demoweather",
  templateUrl : "demoweather.component.html"
})

export class demoweatherComponent{
  @ViewChild("f") formSearch! : NgForm;
  constructor(private http: HttpClient ) {
  }
  demoweather : demoweather[] = new [];
  ngOnInit(){
    this.getData("Hanoi,vietnam");
  }
  getData(city : string){
    let url = "http://api.openweathermap.org/data/2.5/forecast"
    let parameters = new HttpParams();
    parameters = parameters.append("q",city);
    parameters = parameters.append("units","metric");
    parameters = parameters.append("appid","09a71427c59d38d6a34f89b47d75975c");
    this.http.get(url,{
      params : parameters
    }).subscribe((data:any)=>{
      for (let i = 0;i<data.list.length;i++){
        this.demoweather.city = data.city.name;
        this.demoweather.country = data.country;
        this.demoweather.temp = data.list.name.temp;
        this.demoweather.humidity = data.list.name.humidity;
        this.demoweather.pressure = data.list.name.pressure;
        this.demoweather.description = data.list.weather.description;
      };
    })
  }
  onSubmit(){
    let city = this.formSearch.value.city;
    this.getData(city);
  }

}
