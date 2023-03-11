import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <app-screen></app-screen>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  private _title = 'demo';

  get title(): string {
    console.log('App - get title');
    return this._title;
  }
}
