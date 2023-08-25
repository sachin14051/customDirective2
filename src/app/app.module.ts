import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParaComponent } from './shared/components/para/para.component';
import { CustomDirective } from './shared/directive/custom.directive';
import { MouseDirective } from './shared/directive/mouse/mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParaComponent,
    CustomDirective,
    MouseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
