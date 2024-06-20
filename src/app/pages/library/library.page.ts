import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Storage } from '@ionic/storage-angular';
import { Subscription, switchMap } from 'rxjs';
import { UserLoginDto } from 'src/app/models/dto/userLoginDto';

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage implements OnInit{

  // user : any;
  // authzeroUser !: Subscription;
  user$ = this.authService.isAuthenticated$.pipe(switchMap(() => this.authService.user$));
  constructor(private storage: Storage,
    public authService: AuthService) {
    }
  
  ngOnInit(){
    
    // this.storage.create().then(() => {
    //   this.storage.get('user').then((user) => {
    //     this.user = JSON.parse(user);
    //   })  
    // })
    
  }
}
