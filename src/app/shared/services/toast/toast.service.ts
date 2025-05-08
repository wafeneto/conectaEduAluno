import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

type ToastProps = ToastOptions & {
  message: string;
  cssClass?: 'toast-error' | 'toast-success';
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  public async showToast({ message, cssClass }: ToastProps): Promise<void> {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: cssClass ?? 'toast-error',
    });

    await toast.present();
  }
}
