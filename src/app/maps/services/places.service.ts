import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number]
  public isLoadingPlaces: boolean = false
  public places: Feature[] = []


  get isUserLocationReady(): boolean {
    return !!this.useLocation
  }

  constructor( private http: HttpClient ) {
    this.getUserLocation()
   }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject ) => {
      navigator.geolocation.getCurrentPosition(
        ( { coords } ) => {
          this.useLocation = [ coords.longitude, coords.latitude ]
          resolve( this.useLocation )
        },
        ( err ) => {
          alert('Geolocation could not be obtained')
          console.log(err)
          reject()
        }
      )
    })
  }

  getPlacesByQuery( query: string = '' ) {

    this.isLoadingPlaces = true

    this.http.get<PlacesResponse>(`https://api.mapbox.com/search/geocode/v6/forward?q=${query}&limit=5&proximity=-73.96551635400584%2C40.78159954735071&language=es&access_token=pk.eyJ1IjoiamVyZW1pYXNsciIsImEiOiJjbTBtbHR0NmgwNDU4Mm1zZ2FzdTR5M3MxIn0.M4CinAqrKoeErhwmtLe5aw`)
      .subscribe(resp => {
        console.log(resp.features)
        this.isLoadingPlaces = false
        this.places = resp.features
      })
  }

}
