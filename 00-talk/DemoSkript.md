# Preparation

Excel Demo Sheet öffnen.

- https://baselone.ch/one#Conference
- https://svelte.dev/repl/
- https://svelte.dev/tutorial/basics
- https://www.typescriptlang.org/play



# Angular

### Demo

=> Implement step by step to show the intuitive programming model 
-> Who can follow? Who whould have written the code the same way?

=> Add the `setTimeout ` to easier explain `Zone.js`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Display of Counter</h2>
      <h1>{{ state }}</h1>
      <button (click)="increment()">Increment</button>
    </div>
  `,
  styles: [],
})
export class CounterComponent {
  state = 0;

  constructor() {
    setInterval(() => {
      this.state++;
    }, 1000);
  }

  increment() {
    this.state++;
  }
}
```



### How does it work?

Navigate to http://localhost:7601/assets/no-load.html



### Mutability

```typescript
  state = { count: 0, name: 'Jonas' };	
```

It still works!



### Change Detection Cascade

Introduce getters & add the intervall:
```
<h1>{{ name }}</h1>
<h1>{{ count }}</h1>
/////
get count() {
  console.log('Counter - get count');
  return this.state.count;
}

get name() {
  console.log('Counter - get name');
  return this.state.name;
}

////

  constructor() {
    setInterval(() => {}, 1000);
  }

```

=> Getter of `name ` is called!

Move the intervall to the top level component & add some more counters ....



Fix: `changeDetection: ChangeDetectionStrategy.OnPush,`
=> Drawback: Mutable Programming model does not work any more => Wait for React!



**But Mutability:**

Move state into Screen:

```typescript
<app-counter [state]="state"></app-counter>
/////
export class ScreenComponent {
  state = { count: 0, name: 'Jonas' };
  constructor() {
    setInterval(() => {
      this.state.count++;
    }, 1000);
  }
}
```

```typescript
export class CounterComponent {
  @Input() state: any;
}
```

=> Does not work with on Push!

Fix:

```typescript
 this.state = { ...this.state, count: this.state.count + 1 };
```





### Observables

```typescript
@Component({
  selector: 'app-screen',
  template: `
    <div>
      <h3>Display of Screen</h3>
      <app-counter [state]="state$"></app-counter>
    </div>
  `,
  styles: [],
})
export class ScreenComponent implements OnInit {
  state$ = interval(1000).pipe(
    scan((acc) => acc + 1, 0),
    startWith(0)
  );

}
```

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Display of Counter</h2>
      <h1>{{ state | async }}</h1>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  // state = { count: 0, name: 'Jonas' };
  @Input() state: any;
}
```



### Zone-Less

In `main.ts`:

```
platformBrowserDynamic()
  .bootstrapModule(
    AppModule,
    { ngZone: 'noop' }
  )
```

=> Nothing works!

Intoroduce button:
```
<button (click)="trigger()">Go!</button>
////
constructor(private cdRef: ChangeDetectorRef) {}
trigger() {
	this.cdRef.detectChanges();
}
```

Or in the stream:

```
state$ = interval(1000).pipe(
  scan((acc) => acc + 1, 0),
  startWith(0),
  tap(() => this.cdRef.detectChanges())
);
```





# React

Try:

```tsx
export function Counter() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log("Increment", count);
  }

  console.log("Render Counter", count);
  return (
    <div>
      <h2>Display of Counter.</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
```

=> does not work!

Make it work by using React APIs to manage the state:

```tsx
import { useState } from "react";

export function Counter() {
  const [state, setState] = useState(0);

  function increment() {
    setState(state + 1);
    console.log("Increment", state);
  }

  console.log("Render Counter", state);
  return (
    <div>
      <h2>Display of Counter.</h2>
      <h1>{state}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
```

- We ask React to manage state associated with this component.
- It should be called setStateThenRerender



### Immutability

Introduce object as state: `{count: 0, name: 'Jonas'}`

```tsx
export function Counter() {
  const [state, setState] = useState({ count: 0, name: 'Jonas' });

  function increment() {
    state.count += 1;
    setState(state);
    console.log("Increment", state);
  }

  console.log("Render Counter", state);
  return (
    <div>
      <h2>Display of Counter.</h2>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increase</button>
    </div>
  );
}
```

=> does not work!

Fix:

```tsx
  function increment() {
    const newState = { count: state.count + 1 };
    setState(newState);
    console.log("Increment", state);
  }
```



### Render Cascade:

In `Screen.tsx`:
```JSX
<input value={name} onChange={nameChange} />
<h1>Hi, my name is {name}</h1>
```

=> With every key press the Counter Component is also rendered!

Why? => "impure" components still work ...
 -> render `new Date().toLocaleString()`
-> Refs -> a mutable construct in React

Fix:

```
export const Counter = React.memo(CounterImpl);
```





# Vue

### Demo

Try:
```js
let state = 1;

function increment() {
  state++;
  console.log("state", state);
}
////
<button @click="increment">Increase</button>
```

=> Does not work!

Make it work by introducing reactive state:

```vue
<template>
  <h3>Display of Counter!</h3>
  <h1>{{ state.count }}</h1>
  <button @click="increment">Increase</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
</script>
```



Demonstrate Fine-Grained Reactivity: Introduce second state and `computed`
```vue
<template>
  <h3>Display of Counter!</h3>
  <h1>{{ val1 }}</h1>
  <button @click="increment">Increase</button>
  <h1>{{ val2 }}</h1>
  <button @click="increment2">Increase</button>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

let state = reactive({ count: 0 });
let state2 = reactive({ count: 0 });

function increment() {
  state.count++;
}
function increment2() {
  state2.count++;
}

const val1 = computed(() => {
  console.log("val1 computed");
  return state.count * 2;
});
const val2 = computed(() => {
  console.log("val2 computed");
  return state2.count * 2;
});
</script>

<style scoped></style>

```



### Bare-Bones Example

```js
const { reactive, watchEffect } = Vue;

const state = reactive({
  count: 0,
});

watchEffect(() => {
  document.body.innerHTML = `count is ${state.count}`;
});

setInterval(() => {
	state.count++;
}, 1000);	
```



### Pitfall

Destructuring of state.

```vue
<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });
let count = state.count;

function increment() {
  count++;
  console.log("count", count);
}
</script>
```







# Svelte

### Demo

```js
<script lang="ts">
    let state = 0;

    function increase() {
        state++;
    }
</script>
<h2>{state}</h2>
<button on:click={increase}>Increase</button>
```

Show generated code in network tab!





### Extend Demo with object as state

```js
<script lang="ts">
    let state = {counter: {num: 0}};

    function increase() {
        state.counter.num++;
    }
</script>
<h2>{state.counter.num}</h2>
<button on:click={increase}>Increase</button>
```





### Pitfall: Only direct assignements trigger reactivity

```js
<script lang="ts">
    let state = {counter: {num: 0}};

    function increase() {
        let counter = state.counter;
        counter.num++;
    }
</script>
<h2>{state.counter.num}</h2>
<button on:click={increase}>Increase</button>		
```

Solution: `state.counter = counter;`

