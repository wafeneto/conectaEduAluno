import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.page.html',
  styleUrls: ['./ocorrencias.page.scss'],
  standalone: false
})
export class OcorrenciasPage implements OnInit {
  servico = Servico;
  constructor() { }

  ngOnInit() {
  }

}
