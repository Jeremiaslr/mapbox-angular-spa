import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if( !navigator.geolocation ) {
  alert('Browser does not support geolocation')
  throw new Error('Browser does not support geolocation')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
