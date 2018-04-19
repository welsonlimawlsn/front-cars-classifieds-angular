import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterSellerService} from '../services/register-seller.service';
import {FormUtilsService} from '../utils/form-utils.service';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {

  form: FormGroup;
  successMessage: string;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private registerSellerService: RegisterSellerService, private formUtils: FormUtilsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      seller: this.formBuilder.group({
        name: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        dateOfBirth: [null, Validators.required],
        identificationDocument: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    this.resetMessage();
    if (this.form.valid) {
      this.registerSellerService.register(this.form.value)
        .subscribe(
          seller => {
            this.successMessage = `Register of ${seller.seller.name} with success!`;
            this.form.reset();
            },
          error => this.errorMessage = error.error.detail);
    }
  }

  configureErrorStyle(fieldName: string) {
    return this.formUtils.configureErrorStyle(fieldName, this.form);
  }

  private resetMessage(): void {
    this.successMessage = null;
    this.errorMessage = null;
  }

}
