import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finas';
  cor = '';
  mostrarTexto = false;

  tornarTextoVisivel(): void {
    this.mostrarTexto = !this.mostrarTexto;
  }

  alunos = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Mateus', idade: 19 },
    { nome: 'Fofuxo', idade: 30 },
    { nome: 'Daniel', idade: 20 },
  ];

  trackByAlunos(index: number, aluno: any): number {
    return aluno.idade;
  }
}
