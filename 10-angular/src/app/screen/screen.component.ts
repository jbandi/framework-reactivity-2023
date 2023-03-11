import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { interval, scan, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-screen',
  template: `
    <div>
      <h3>Angular Demo</h3>
      <app-counter></app-counter>
    </div>
  `,
  styles: [],
})
export class ScreenComponent {
  // DEMO:
  // state = { count: 0, name: 'Jonas' };
  // constructor() {
  //   setInterval(() => {
  //     this.state.count++;
  //   }, 1000);
  // }
  // DEMO:
  // state$ = interval(1000).pipe(
  //   scan((acc) => acc + 1, 0),
  //   startWith(0)
  // );
}
