import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-typography',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})
export class FootprintComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  showStepper:boolean;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  this.showStepper=true;


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
