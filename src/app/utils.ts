import { AbstractControl, ValidationErrors } from '@angular/forms';

export function dateGreaterThanCurrent(control: AbstractControl): ValidationErrors | null {
  const currentDate = new Date();
  const inputDate = new Date(control.value);

  if (isNaN(inputDate.getTime())) {
    return { invalidDate: true };
  }

  return inputDate > currentDate ? null : { dateNotGreaterThanCurrent: true };
}
