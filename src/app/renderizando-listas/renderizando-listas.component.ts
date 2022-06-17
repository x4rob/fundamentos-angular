import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';
@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id:1, nome: "Celular YL", descricao: "80 cameras", esgotado: false},
    {id:1, nome: "Celular PL", descricao: "2 cameras", esgotado: false},
    {id:1, nome: "Celular TL", descricao: "sem camera", esgotado: true}
  ]
  
  }


