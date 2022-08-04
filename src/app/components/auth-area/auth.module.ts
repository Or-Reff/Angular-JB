import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent, LogoutComponent, LoginComponent, AuthMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AuthMenuComponent
  ]
})
export class AuthModule { }
