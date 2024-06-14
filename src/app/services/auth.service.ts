import { Injectable } from '@angular/core';
import { UserLoginDto } from '../models/dto/userLoginDto';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private storage: Storage,
              private router : Router) { }
  
  async login(email: string, password: string): Promise<UserLoginDto> {
    try {
      const response = await fetch('assets/dummy/login.json');
      if (!response.ok) {
        return Promise.reject('Failed to fetch login data');
      }
      
      const userData = await response.json();
      const matchingUser = userData.data.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
      
      if (!matchingUser) {
        return Promise.reject('Invalid credentials');
      }
      
      return matchingUser;
    } catch (error) {
      throw error;
    }
  }
  
  async getUser(): Promise<UserLoginDto | null> {
    try {
      await this.storage.create();
      const user = await this.storage.get('user');
      if (user) {
        return JSON.parse(user);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
  
  logout() {
    this.storage.create().then(() => {
      this.storage.remove('user').then(() => {
        this.router.navigate(['/login']);
      })
    })
  }

  async isUserValid(){
    const user = await this.getUser();

    if(!user|| user.email.length === 0 || user.role.length === 0){
      return false;
    }
    
    return true;
  }
}