import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { LengthConverterComponent } from './components/length-converter/length-converter.component';

const routes: Routes = [
  {path:'length', component: LengthConverterComponent},
  {path:'currency',component: CurrencyConverterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
