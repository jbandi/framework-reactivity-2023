import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { interval, scan, startWith, tap } from 'rxjs';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-screen',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <div>
      <h3>Angular Demo</h3>
      <app-counter/>
    </div>
  `,
  styles: [],
})
export class ScreenComponent {}
