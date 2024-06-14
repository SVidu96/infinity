import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AppToastService {

  constructor(private toastController : ToastController) { }

  async presentToast(toastMessage:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
    });
    toast.present();
  }
}
