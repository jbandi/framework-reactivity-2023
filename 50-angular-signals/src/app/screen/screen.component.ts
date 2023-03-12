import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h3>{{title}}</h3>
    <app-counter/>
    <app-counter/>
  `,
  styles: [],
})
export class ScreenComponent {
  get title() {
    // console.log('Screen Component: Rendering title ...');
    return 'Screen Component';
  }
}
