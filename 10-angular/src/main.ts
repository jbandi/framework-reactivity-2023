import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(
  AppComponent
  // DEMO:
  // { ngZone: 'noop' }
).catch((err) => console.error(err));
