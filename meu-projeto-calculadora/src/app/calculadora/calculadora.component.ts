import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  operadorSelecionado: string = '+';
  resultado: number | null = null;
  divisaoPorZero: boolean = false;
 

  calcularResultado(){
    this.divisaoPorZero = false;

     if (this.operadorSelecionado === '/' && this.numero2 === 0) {
        this.resultado = null; // Evita mostrar número incorreto
        this.divisaoPorZero = true;
        return;
    }

    switch (this.operadorSelecionado){
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;

    }
  }


}
