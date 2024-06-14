import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserLoginDto } from 'src/app/models/dto/userLoginDto';

@Component({
  selector: 'app-library',
  templateUrl: 'library.page.html',
  styleUrls: ['library.page.scss']
})
export class LibraryPage implements OnInit{

  user : UserLoginDto = new UserLoginDto();

  constructor(private storage: Storage) {}
  
  ngOnInit(){
    this.storage.create().then(() => {
      this.storage.get('user').then((user) => {
        this.user = JSON.parse(user);
      })  
    })
    
  }
}
