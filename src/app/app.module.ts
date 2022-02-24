import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { LengthConverterComponent } from './components/length-converter/length-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    //CalculatorComponent,
    CurrencyConverterComponent,
    LengthConverterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
