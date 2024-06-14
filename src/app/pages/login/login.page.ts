import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AppToastService } from 'src/app/services/app-toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm !: FormGroup

  constructor(private toastService: AppToastService,
    private authService: AuthService,
    private storage: Storage,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  //TODO : Refactor after connecting the backend. auth logics should be in authService.login()
  async onSubmit() {
    await this.authService.login(this.loginForm.value.email.trim(), this.loginForm.value.password.trim()).then((user) => {
      if (user) {
        this.toastService.presentToast("Login successful");
        try {
          this.storage.create().then(() => {
            this.storage.remove('user');
            this.storage.set('user', JSON.stringify(user));
            this.router.navigate(['/tabs']);
          });
        } catch (error) {
          console.log(error);
        }
      }
    }).catch((error) => {
      this.toastService.presentToast(error);
    })
  }

}
