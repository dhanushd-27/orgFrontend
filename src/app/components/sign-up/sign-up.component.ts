import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { GeneralService } from '../../service/general.service';
import { SignUpFormData } from '../../model/signup.type';

@Component({
  selector: 'app-sign-up',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  generalService = inject(GeneralService);

  SignUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
  });

  onSubmit() {
    const { name, email, password }: SignUpFormData = this.SignUpForm.getRawValue() as { name: string; email: string; password: string };

    console.log(this.SignUpForm.getRawValue());
    this.generalService.signUpUser({ name, email, password });
  }
}
