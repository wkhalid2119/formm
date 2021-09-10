import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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
  }

  submitForm(){
    console.log(this.form.controls)
  }

}
