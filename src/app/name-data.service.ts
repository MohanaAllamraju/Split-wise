import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameDataService {

  private userNameSource = new BehaviorSubject<string>(this.getUserNameFromStorage());
  currentUserName = this.userNameSource.asObservable();

  constructor() { }

  changeUserName(userName: string) {
    localStorage.setItem('userName', userName);
    this.userNameSource.next(userName);
  }

  private getUserNameFromStorage(): string {
    return localStorage.getItem('userName') || '';
  }


}
