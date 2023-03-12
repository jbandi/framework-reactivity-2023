import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div>
      <h2>Display of Counter</h2>
    </div>
  `,
  styles: [],
})
export class CounterComponent {}

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
