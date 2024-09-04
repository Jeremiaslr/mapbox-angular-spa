import { Component } from '@angular/core';
import { PlacesService } from '../../services';


@Component({
  selector: 'map-screen',
  templateUrl: './mapscreen.component.html',
  styleUrl: './mapscreen.component.css'
})
export class MapScreenComponent {

  constructor( private placesService: PlacesService) {}

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady
  }

}
