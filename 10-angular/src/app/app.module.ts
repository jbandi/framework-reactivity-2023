import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, ScreenComponent, CounterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
