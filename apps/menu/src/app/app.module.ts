import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ErrorComponent } from './error/error.component';
import { BemutatoComponent } from './bemutato/bemutato.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ErrorComponent,
    BemutatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
