import { Component, OnInit, Input } from '@angular/core';
import { UbicacionService } from '../ubicacion.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {
  @Input() recibir:any=[];
  pronostico:any=[];
  error=0;
  flag=false;
  img:String="C:/Users/David Calderon/Desktop/ProyectoWebVacaciones/ImagenesClima/clear.png";
  constructor(private ubicacion: UbicacionService, private sanitizer: DomSanitizer) {  }
  ngOnInit() {
      this.ubicacion.getweather(this.recibir).subscribe(
        y=>{
          this.pronostico=y;
          this.flag=true;
        }
      );
  }
  datename(f){
    return new Date(f.slice(0,4),(f.slice(4,6)-1),f.slice(6)).toDateString()
  }
  formatear(n){
      if(this.error<1){
        this.error=this.error+1;
        this.ngOnInit();
      }
      return n.slice(6)+'/'+n.slice(4,6)+'/'+n.slice(0,4); 
    }
  verenclima(){
    //console.log((Object.values(this.pronostico)[2][0]));
    console.log(typeof((Object.values(this.pronostico)[2][0]).date));
    console.log(this.recibir);
    console.log(this.recibir[0],this.recibir[1]);
    console.log(this.recibir.longitude,this.recibir.latitude);
    console.log(this.pronostico);
  }
}
