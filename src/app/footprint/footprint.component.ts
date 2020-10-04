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


  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  finish:boolean;

isShowFamily():boolean{
  return this.labelPosition.localeCompare('after')==0;
}

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  this.showStepper=false;
this.finish=false;


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  calculate(){

    this.showStepper = !this.showStepper;

    this.finish=!this.finish;
    

  }

}
