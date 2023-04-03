import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { StatComponent } from './common/stat/stat.component';
import { DrinkListComponent } from './common/drink-list/drink-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
