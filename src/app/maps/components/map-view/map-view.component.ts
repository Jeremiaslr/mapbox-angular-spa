import { Map, Popup, Marker } from 'mapbox-gl';
import { PlacesService } from './../../services/places.service';
import { AfterViewInit, Component, ElementRef, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor( private placesService: PlacesService) {}

  ngAfterViewInit(): void {

    if ( !this.placesService.useLocation ) throw Error('There is not placesService.userLocation')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Here I am</h6>
        <span>In this part of the World.</span>
      `)

    new Marker({ color: 'red' })
        .setLngLat( this.placesService.useLocation )
        .setPopup( popup )
        .addTo( map )
  }
}


