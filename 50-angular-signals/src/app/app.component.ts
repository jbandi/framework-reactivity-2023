import { Component } from '@angular/core';
import { ScreenComponent } from './screen/screen.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello Angular Signals!</h1>
    <app-screen/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'signal-demo';
}
