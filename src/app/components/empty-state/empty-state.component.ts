import { Component, Input, OnInit } from '@angular/core';
import { IonText, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  standalone:false
})
export class EmptyStateComponent  implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  constructor() { }

  ngOnInit() {}

}
