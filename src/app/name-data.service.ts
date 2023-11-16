import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameDataService {

  private userNameSource = new BehaviorSubject<string>('');
  currentUserName = this.userNameSource.asObservable();

  constructor() { }

  changeUserName(userName: string) {
    this.userNameSource.next(userName);
  }
}
