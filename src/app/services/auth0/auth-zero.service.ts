import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { callbackUri } from '../../auth.config';
import { switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthZeroService {
  constructor(public auth: AuthService) { }

  login() {
    this.auth
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }

  logout() {
    this.auth
      .logout({
        logoutParams: {
          returnTo: callbackUri,
        },
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
  }

}