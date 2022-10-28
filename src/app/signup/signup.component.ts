import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: any = {};

  constructor(private userService: UserService, private authService: LoginAuthService) {
    this.authService.isLoggedIn();
   }

  ngOnInit(): void {
  }

  saveUser(user: any, userForm: any){
    user.enabled = true;
    this.userService.saveUser(user).subscribe((response) => {
      if(response){
        console.log(response);
        userForm.reset();
      }
    })
  }

}
