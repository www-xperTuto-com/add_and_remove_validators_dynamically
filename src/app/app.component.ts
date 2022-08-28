import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'XperTuto.com : Angular add and remove validators';

  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      pseudo: new FormControl('XperTuto', Validators.required),
      name: new FormControl('Aouidane', Validators.required),
      age: new FormControl('15'),
      email: new FormControl(''),
    });
  }

  setAgeSyncValidator() {
    this.userForm.controls['age'].setValidators([Validators.min(18), Validators.max(90)]);
    this.userForm.controls['age'].updateValueAndValidity();
  }

  removeAgeSyncValidator() {
    this.userForm.controls['age'].clearValidators();
    this.userForm.controls['age'].updateValueAndValidity();
  }

  setAsyncEmailValidator() {
    // this.userForm.controls['email'].setAsyncValidators([checkEmailValidator(this.ldapService)]);
    this.userForm.controls['email'].updateValueAndValidity();
  }

  removeEmailAsyncValidator() {
    this.userForm.controls['email'].clearAsyncValidators();
    this.userForm.controls['age'].updateValueAndValidity();
  }

  setError() {
    this.userForm.controls['pseudo'].setErrors({pseudo_already_exist: true})
  }

  removeError() {
    this.userForm.controls['pseudo'].setErrors({});
  }

  adduser() {
    // call API
    console.log(this.userForm.getRawValue());
  }
}
