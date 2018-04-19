import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable()
export class FormUtilsService {

  constructor() { }

  private verifyIfFieldIsTouchedAndIsInvalid(fieldName: string, form: FormGroup): boolean {
    const field = form.get(fieldName);
    return !field.valid && field.touched;
  }

  configureErrorStyle(fieldName: string, form: FormGroup) {
    return {
      'is-invalid': this.verifyIfFieldIsTouchedAndIsInvalid(fieldName, form)
    };
  }

}
