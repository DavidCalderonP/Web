import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../ubicacion.service';
import { ClimaComponent } from '../clima/clima.component';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  data:any=[];
  flag=false;
  date:Date;
  coordenadas:any=[5];
  constructor(private ubi: UbicacionService) {
    setInterval(() => {
      this.date = new Date()
    }, 1000);
   }
  ngOnInit() {
    this.localizacion();
  }
  verenfecha(){
    console.log(this.data);
    console.log(this.coordenadas);
  }
  localizacion(){
    this.ubi.getData().subscribe(
      x=>{
        this.flag=true;
        this.data=x;
        this.coordenadas[0]=this.data.longitude;
        this.coordenadas[1]=this.data.latitude;
      },
      e=>{alert(e)}
    );
  }
}
