import { AbstractControl, ValidationErrors } from "@angular/forms";


export function passwordsMatchValidator(
    form: AbstractControl
  ): ValidationErrors | null {
    const { password, passwordConfirmation } = form.value;
    const passwordConfirmationControl = form.get('passwordConfirmation');
    const errors =
      password === passwordConfirmation || (!password && !passwordConfirmation)
        ? null
        : { passwordMismatch: true };
    passwordConfirmationControl?.setErrors(errors);
    return errors;
  }