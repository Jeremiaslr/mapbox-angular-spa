import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW1pYXNsciIsImEiOiJjbTBtbHR0NmgwNDU4Mm1zZ2FzdTR5M3MxIn0.M4CinAqrKoeErhwmtLe5aw';

if( !navigator.geolocation ) {
  alert('Browser does not support geolocation')
  throw new Error('Browser does not support geolocation')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
