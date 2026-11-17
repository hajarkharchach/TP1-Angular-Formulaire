import { Component } from '@angular/core';
import { TemplateDrivenComponent } from './template-driven/template-driven';
import { ReactiveComponent } from './reactive/reactive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateDrivenComponent, ReactiveComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'tp1-forms';
}