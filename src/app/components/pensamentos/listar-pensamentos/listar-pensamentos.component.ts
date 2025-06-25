import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
  {
    conteudo: 'Passo informações para o componente filho',
    autoria: 'Componente pai',
    modelo: 'modelo3'
  },
  {
    conteudo: 'Minha propriedade é decorada com @Input()',
    autoria: 'Componente filho',
    modelo: 'modelo2'
  },
  {
    conteudo: 'Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis',
    autoria: 'Lorem Ipsum',
    modelo: 'modelo1'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
