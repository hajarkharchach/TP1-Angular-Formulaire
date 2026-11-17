import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, ReactiveFormsModule,
  Validators, AbstractControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './reactive.html',
  styleUrl: './reactive.scss'
})
export class ReactiveComponent implements OnInit {
  regForm!: FormGroup;
  countries = ['USA', 'Maroc', 'Suisse', 'Canada'];
  submitted = false;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3)]],
      age:      [null, [Validators.required, Validators.min(18)]],
      country:  ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]]
    });
  }

  isInvalid(field: string): boolean {
    const c: AbstractControl | null = this.regForm.get(field);
    return !!c && c.invalid && c.touched;
  }

  hasError(field: string, error: string): boolean {
    const c = this.regForm.get(field);
    return !!c && c.touched && c.hasError(error);
  }

  onSubmit(): void {
    if (this.regForm.invalid) {
      this.regForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.submittedData = { ...this.regForm.value, age: Number(this.regForm.value.age) };
    console.log('Inscription réussie !', this.submittedData);
  }
}