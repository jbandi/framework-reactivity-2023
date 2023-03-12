import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScreenComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
