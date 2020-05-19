import { Component } from '@angular/core';
import { UbicacionService } from './ubicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto';
  constructor(private ubi: UbicacionService){}
  
  ngOnInit(){
    
  };


}
