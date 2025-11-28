import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
  standalone: false
})
export class AvaliacaoPage implements OnInit {
  servico = Servico;
  constructor() { }

  ngOnInit() {
  }

}
