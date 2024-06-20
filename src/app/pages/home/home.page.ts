import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Browser } from '@capacitor/browser';
import { mergeMap, switchMap } from 'rxjs/operators';
import { AuthZeroService } from 'src/app/services/auth0/auth-zero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user$ = this.auth.isAuthenticated$.pipe(switchMap(() => this.auth.user$));
  constructor(private authService:AuthZeroService,public auth: AuthService) {}

  ngOnInit() {

  }

  login() {
    this.authService.login();
  }
}
