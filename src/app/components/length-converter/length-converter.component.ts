import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-length-converter',
  templateUrl: './length-converter.component.html',
  styleUrls: ['./length-converter.component.css']
})
export class LengthConverterComponent implements OnInit {
  public fromLength:any = ["mile", "meter", "feet", "kilometer"];
  public toLength:any = ["mile", "meter", "feet", "kilometer"];
  public convertedLenth:any;
  
   // a Model for my reactive form plus theire validations
   length = new FormGroup({
    choiceFrom: new FormControl(),
    choiceTo: new FormControl(),
    lengthValue: new FormControl(),
    // convertedLenth: new FormControl()
    

  })
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup) {
    let from = form.value.choiceFrom
    let to = form.value.choiceTo
    let value = form.value.lengthValue
    
    
    console.log("from: "+from);
    console.log("to: "+to);
    console.log("value: "+value);
    // from km to the other units
      if (from=="kilometer" && to=="mile"){
        let mile =this.convertKmToMi(value);
        this.convertedLenth=mile+" miles";
        console.log(this.convertedLenth+" miles") 
      }
      
      else if (from=="kilometer" && to=="meter"){
        let meter =this.convertKmToMeter(value);
        this.convertedLenth= meter+" meters";
        console.log(this.convertedLenth+" meter") 
      }
      
      else if (from=="kilometer" && to=="feet"){
        let feet =this.convertKmToFeet(value);
        this.convertedLenth=feet+" feet";
        console.log(this.convertedLenth+" feet") 
      }
      else if (from=="kilometer" && to=="kilometer"){
        let km =this.convertKmToKm(value);
        this.convertedLenth=km+" km";
        console.log(this.convertedLenth+" km") 
      }
      // end of from km
      // convert from mile to other units
      else if (from=="mile" && to=="kilometer"){
        let km =this.convertMiToKm(value);
        this.convertedLenth=km+" km";
        console.log(this.convertedLenth+" km") 
      }
      
      else if (from=="mile" && to=="meter"){
        let meter =this.convertMiToMeter(value);
        this.convertedLenth= meter+" meters";
        console.log(this.convertedLenth+" meter") 
      }
      
      else if (from=="mile" && to=="feet"){
        let feet =this.convertMiToFeet(value);
        this.convertedLenth=feet+" feet";
        console.log(this.convertedLenth+" feet") 
      }
      else if (from=="mile" && to=="mile"){
        let mile =this.convertMiToMi(value);
        this.convertedLenth=mile+" mile";
        console.log(this.convertedLenth+" mile") 
      }
      // end of from miles
      // convert from foot to other units
      else if (from=="feet" && to=="kilometer"){
        let km =this.convertFeetToKm(value);
        this.convertedLenth=km+" km";
        console.log(this.convertedLenth+" km") 
      }
      
      else if (from=="feet" && to=="meter"){
        let meter =this.convertFeetToMeter(value);
        this.convertedLenth= meter+" meters";
        console.log(this.convertedLenth+" meter") 
      }
      
      else if (from=="feet" && to=="feet"){
        let feet =this.convertFeetToFeet(value);
        this.convertedLenth=feet+" feet";
        console.log(this.convertedLenth+" feet") 
      }
      else if (from=="feet" && to=="mile"){
        let mile =this.convertFeetToMi(value);
        this.convertedLenth=mile+" mile";
        console.log(this.convertedLenth+" mile") 
      }
      // end of from foot
      // convert from meter to other units
      else if (from=="meter" && to=="kilometer"){
        let km =this.convertMeterToKm(value);
        this.convertedLenth=km+" km";
        console.log(this.convertedLenth+" km") 
      }
      
      else if (from=="meter" && to=="meter"){
        let meter =this.convertMeterToMeter(value);
        this.convertedLenth= meter+" meter";
        console.log(this.convertedLenth+" meter") 
      }
      
      else if (from=="meter" && to=="feet"){
        let feet =this.convertMeterToFeet(value);
        this.convertedLenth=feet+" feet";
        console.log(this.convertedLenth+" feet") 
      }
      else if (from=="meter" && to=="mile"){
        let mile =this.convertMeterToMi(value);
        this.convertedLenth=mile+" mile";
        console.log(this.convertedLenth+" mile") 
      }
    }

    
    


   // CONVERSION OF KILOMETER
   convertKmToMi( kilometer : number) {
    let mile = kilometer * 0.621;
    return mile;
}
 convertKmToMeter( kilometer: number) {
    let meter = kilometer * 1000;
    return meter;
}
 convertKmToFeet( kilometer: number) {
    let feet = kilometer * 3280.84;
    return feet;
}
convertKmToKm( kilometer: number) {
  let km = kilometer * 1;
  return km;
}
 // CONVERSION OF MILES
  convertMiToKm( mile: number) {
   let  kilometer = mile * 1.60934;
    return kilometer;
}
 convertMiToMeter( mile: number) {
    let meter = mile * 1609.34;
    return meter;
}
 convertMiToFeet( mile: number) {
   let  feet = mile * 5280;
    return feet;
}
convertMiToMi( mile: number) {
  let  mi = mile * 1;
   return mi;
}
// CONVERSION OF FOOT
 convertFeetToKm( feet: number) {
   let  kilometer = feet * 0.0003048;
    return kilometer;
}
 convertFeetToMeter( feet: number) {
   let  meter = feet * 0.3048;
    return meter;
}
 convertFeetToMi( feet: number) {
   let  mile = feet * 0.000189394;
    return mile;
}
convertFeetToFeet( feet: number) {
  let  foot = feet * 1;
   return foot;
}
// CONVERSION OF METER
 convertMeterToKm( meter: number) {
   let  kilometer = meter * 0.001;
    return kilometer;
}
 convertMeterToFeet( meter: number) {
  let  feet = meter * 3.28084;
    return feet;
}
 convertMeterToMi( meter: number) {
  let   mile = meter * 0.000621371;
    return mile;
}
convertMeterToMeter( meter: number) {
  let   m = meter * 1;
    return m;
}

}
