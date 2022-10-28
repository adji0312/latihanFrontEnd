import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { Observable, Subject } from 'rxjs';
// import {  } from 'rxjs/Subject';

@Injectable()
export class LoginAuthService {

  private subject = new Subject<any>();

  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      this.subject.next({status:true});
    }else{
      this.subject.next({status: false});
    }
  }

  clearStatus(){
    this.subject.next;
  }

  getStatus(): Observable<any>{
    return this.subject.asObservable();
  }

  constructor() { }
}
