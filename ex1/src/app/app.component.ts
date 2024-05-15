import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ex1';
  mensagem = "bananas";

  isMouseOver: boolean = false;
  valorAtual: string = '';
  valorSalvo: string = '';

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = event.key;
  }

  salvarValor(event: any) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
