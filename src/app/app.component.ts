import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StorageService } from './shared/services/storage/storage.service';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platForm: Platform, private storageService: StorageService) {
    this.platForm.ready().then(async () => {
      await this.storageService.init();

    })
  }
}
