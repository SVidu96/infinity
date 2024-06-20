import { Component } from '@angular/core';
import { AuthZeroService } from 'src/app/services/auth0/auth-zero.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private authService:AuthZeroService) { }

  logout() {
    this.authService.logout();
  }
}
