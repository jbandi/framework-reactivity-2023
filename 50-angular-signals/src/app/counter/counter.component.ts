import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>{{ name }}</h2>
    <h3>Count {{ count() }}</h3>
    <h3>Double {{ doubleCount() }}</h3>
    <button (click)="increment()">Increment</button>
  `,
})
export class CounterComponent implements OnInit {
  count = signal(0);

  doubleCount = computed(() => {
    let doubleCount = this.count() * 2;
    console.log('Computed double count: ', doubleCount);
    return doubleCount;
  });

  ngOnInit(): void {
    effect(() => {
      console.log('Effect: Count is now: ', this.count());
    });

    // setInterval(() => {
    //   this.count.set(this.count() + 1);
    // }, 1000);
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  get name() {
    // console.log('Counter Component: Rendering name ...', this.count());
    return 'Counter Component';
  }
}
