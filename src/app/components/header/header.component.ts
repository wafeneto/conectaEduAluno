import { Component, Input, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: false,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  cor = '';
  logo = '/assets/images/logo.png';

  @Input() title: string;
  @Input() hasBackButton = false;
  @Input() hasNotificationIcon = true;
  @Input() hasLogoIcon = true;
  @Input() hasInfoIcon = true;

  @Input() hasNotification = false;

  constructor() { }

  ngOnInit() {
    
  }

}
