import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';

import { RosangelaHomeComponent } from './rosangela-home/rosangela-home.component';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {  path: 'rosangela-Home', component: RosangelaHomeComponent },
      
    ])
  ],
  declarations: [AppComponent, HelloComponent, RosangelaHomeComponent],
  bootstrap: [AppComponent],

})
export class AppModule {}


