import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginSellerService} from '../services/login-seller.service';
import {FormUtilsService} from '../utils/form-utils.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginSellerService, private formUtils: FormUtilsService) { }

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

  configureErrorStyle(fieldName: string) {
    return this.formUtils.configureErrorStyle(fieldName, this.form);
  }

}
