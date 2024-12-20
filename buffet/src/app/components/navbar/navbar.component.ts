import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginServicio } from '../../services/login-servicio/login-servicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  @Output() emiteToggleSidenav = new EventEmitter<void>();

  emitToggleEvent(){
    this.emiteToggleSidenav.emit();
  }

  constructor(private router: Router, public loginServicio: LoginServicio) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  logout() {
    this.router.navigate(['/']);
    this.loginServicio.logout(); 
  }

  get isLoggedIn(): boolean {
    return this.loginServicio.isLogged(); 
    
  }

}
