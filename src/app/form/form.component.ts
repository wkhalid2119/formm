import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup; // from group to create form
  isSubmit: boolean = false;

  states: any = [];
  cities: any = [];


  constructor(private fb: FormBuilder, private http: HttpClient ) { }


  ngOnInit(): void {
    this.states = State.getStatesOfCountry('US');
    this.create();
  }

  create() {
    this.form = this.fb.group({
      cn: ['', [Validators.required]],
      org: ['', [Validators.required]],
      ou: ['', [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      keyType: ['', [Validators.required]],
      keyLength: ['', [Validators.required]],
    });
  }

  // getter of form controls
  get f() { return this.form.controls; }

  onStateChange() {
    this.cities = City.getCitiesOfState('US', this.form.controls.state.value);
  }

  submitForm() {
    let url="https://hookb.in/K3xzDYyN7juPMK88MDMO"
    this.isSubmit = true;
   if (this.form.invalid) {
       return;
    
   }
   this.http.post(url,this.form.value).subscribe(res=>{
    //here you received the response of your post
    console.log(res);
    //you can do asomething, like
    alert("data sent");
})
}
   

  

}
