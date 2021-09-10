import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'errors',
  templateUrl: './errors.component.html',
})
export class ErrorsComponent implements OnInit {
  @Input() control: FormControl;
  @Input() isSubmit: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
