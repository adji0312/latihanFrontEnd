import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
    this.authService.isLoggedIn();
   }

  ngOnInit(): void {
  }

}
