import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from "./calculadora/calculadora.component";

@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-projeto-calculadora';
}
