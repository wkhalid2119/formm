import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  states:any = [];
  cities:any = [];

  form = new FormGroup({
    CN: new FormControl(''),
    ORG: new FormControl(''),
    OU: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    email: new FormControl(''),
    keytype: new FormControl(''),
    keyLength: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
    this.states = State.getStatesOfCountry('US');
  }

  onStateChange(){
    this.cities = City.getCitiesOfState('US', this.form.controls.state.value);
  }

  submitForm(){

    //logging all the form data you can call your rest api and submit this data from here
    console.log(this.form.value)
  }

}
