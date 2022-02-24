import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { currencyCountriesName } from 'src/app/shared/constant';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  title = 'MD-forms';
  myNumber: number = 123.456;
  x: String = "123;"
  public currencyRates: any = [];
  public convertedRates: any = [];
  public currencyCountry: any = [];

  // a Model for my reactive form plus theire validations
  currency = new FormGroup({
    amount: new FormControl(),
    fromCurrency: new FormControl(),
    toCurrency: new FormControl(),
    countryRates: new FormControl('')

  })
  constructor(private http: HttpClient) { }
 
  onSubmit(form: FormGroup) {
    let amount = form.value.amount
    let base = form.value.countryRates.rate
    let baseCountryCode = form.value.countryRates.country
    let rateConversion:any;
    let rates :any;
    this.convertedRates = []

    for (var key in currencyCountriesName) {
      if (currencyCountriesName.hasOwnProperty(key)) {
        this.currencyCountry.push({ code: key, name: currencyCountriesName[key] })
      }
    }
    for (let index = 0; index < this.currencyRates.length; index++) {
      const countryName = this.currencyRates[index].country === this.currencyCountry[index].code ? this.currencyCountry[index].name : this.currencyRates[index].country
      const country = this.currencyRates[index].country;
      rates = parseFloat(this.currencyRates[index].rate).toFixed(2);
      rateConversion = (amount * rates) / base;
      let parsedConversionRate = parseFloat(rateConversion).toFixed(2);
      this.convertedRates.push({ countryName: countryName, baseCountryCode: baseCountryCode, countryCode: country, baseCountryRate: rates, convertedCountryRate: parsedConversionRate })
    }
    this.resetForm()
  }
  

  
  clearVal() {
    window.location.reload();
  }


  ngOnInit(): void {

    // Simple GET request with response type <any>
    this.http.get<any>('http://api.exchangeratesapi.io/v1/latest?access_key=7f5e6133382a8a61ec6d45116de7c799').subscribe(data => {
      if (data) {
        for (var key in data['rates']) {
          if (data['rates'].hasOwnProperty(key)) {
            this.currencyRates.push({ country: key, rate: data['rates'][key] })
          }
        }
      }
    })



  }
  resetForm() {
    this.currency = new FormGroup({
      amount: new FormControl(''),
      countryRates: new FormControl('')
    });
  }
}
