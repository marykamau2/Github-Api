import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubDetailsComponent } from './github-details/github-details.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    GithubDetailsComponent,
    GithubFormComponent,
    HighlightDirective,
    DateCountPipe,
      GithubDetailsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]


})
export class AppModule { }
