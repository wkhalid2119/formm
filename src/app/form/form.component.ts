import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Country, State, City } from 'country-state-city';
import { ApiService } from '../service/api.service';

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


  constructor(private fb: FormBuilder, private apiService: ApiService) { }


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
    this.isSubmit = true;
    if (this.form.invalid) {
      return;
    }

    //logging all the form data you can call your rest api and submit this data from here
    console.log(this.form.value)
    this.apiService.post(this.form.value).subscribe((res: any) => {
      console.log(res);
    })
  }

}
