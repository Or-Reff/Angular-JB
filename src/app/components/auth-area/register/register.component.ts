import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user = new UserModel();

  constructor(private AuthService: AuthService, private router: Router) {}

  public async send() {
    try {
      await this.AuthService.register(this.user);
      alert('Welcome!');
      this.router.navigateByUrl('/home');
    } catch (err: any) {
      alert(err.message);
    }
  }
}
