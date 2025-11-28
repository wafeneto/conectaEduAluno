import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { Mentor } from 'src/app/models/Mentor';
import { Aluno } from 'src/app/models/modelo';
import { Servico } from 'src/app/models/servico';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
  standalone: false
})
export class AlunoComponent  implements OnInit {
  @Input() aluno: Aluno;
  @Input() trocarAluno: boolean;

  constructor(
    private storageService: StorageService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {

  }
  
  get fotoAluno(){
    if (this.aluno.flagFoto == 1) {
      const caminhoFoto =  Mentor.UrlRequest + '/arquivo/educacao/foto' + this.aluno.codigo + this.aluno.extensaoFoto
     return caminhoFoto;
    }
  }

  async onSelectAluno(){
    Servico.aluno = this.aluno;
    this.navCtrl.navigateRoot('tabs');
  }

  onChangeAluno(){
    this.navCtrl.navigateRoot('seleciona-aluno');
  }
}
