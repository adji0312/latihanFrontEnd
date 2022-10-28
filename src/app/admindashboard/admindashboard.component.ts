import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private authService: LoginAuthService) {
    this.authService.isLoggedIn();
   }

  ngOnInit(): void {
  }

}
