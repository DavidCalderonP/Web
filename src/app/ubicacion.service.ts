import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { merge, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  aux:any=[];
  urlubicacion = "http://api.ipstack.com/"
  key="?access_key=073faa675981432c6f5c5abbfe8ae3d2"
  ip="177.228.113.81"
  //ip="check"
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this.urlubicacion+this.ip+this.key);
  }
  getweather(arr){
    return this.http.get("http://www.7timer.info/bin/api.pl?lon="+arr[0]+"&lat="+arr[1]+"&product=civillight&output=json");
                        //http://www.7timer.info/bin/api.pl?lon=-107.42652893066406&lat=24.779760360717773&product=civillight&output=json
  }
}
