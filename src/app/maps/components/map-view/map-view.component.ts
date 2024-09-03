import { PlacesService } from './../../services/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements OnInit {

  constructor( private PlacesService: PlacesService) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
