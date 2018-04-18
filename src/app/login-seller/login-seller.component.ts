import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginSellerService} from '../services/login-seller.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginSellerService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value)
        .subscribe(
          token => this.loginService.configureToken(token), error => this.errorMessage = error.error.message
        );
      return;
    }
  }

  verifyIfFieldIsTouchedAndIsInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !field.valid && field.touched;
  }

  configureErrorStyle(fieldName: string) {
    return {
      'is-invalid': this.verifyIfFieldIsTouchedAndIsInvalid(fieldName)
    };
  }

}
