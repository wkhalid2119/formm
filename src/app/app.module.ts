import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ErrorsComponent } from './errors/errors.component';
import { NumericOnlyDirective } from './directives/numeric.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ErrorsComponent,
    NumericOnlyDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
