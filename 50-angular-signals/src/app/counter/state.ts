import { signal } from '@angular/core';

export const countState = signal(0);

// setInterval(() => {
//   countState.set(countState() + 1);
// }, 1000);
