import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setUser(user: User) {
    sessionStorage.setItem("user", JSON.stringify(user))
  }

  
  constructor() { }
}
