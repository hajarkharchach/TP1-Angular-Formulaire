import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.scss'
})
export class TemplateDrivenComponent {
  user = {
    fullname: '',
    age: null as number | null,
    country: '',
    email: ''
  };

  countries = ['Maroc', 'France', 'Turkie', 'Canada'];
  submitted = false;
  submittedData: any = null;

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.keys(form.controls).forEach(k => form.controls[k].markAsTouched());
      return;
    }
    this.submitted = true;
    this.submittedData = { ...this.user, age: Number(this.user.age) };
    console.log('Inscription réussie !', this.submittedData);
  }
}