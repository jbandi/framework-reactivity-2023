import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <app-screen/>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  private _title = 'Angular App';

  get title(): string {
    console.log('App - get title');
    return this._title;
  }
}
