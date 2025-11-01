import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-screen-component.html',
  styleUrls: ['./login-screen-component.css'],
})
export class LoginScreenComponent {
  showLogin = signal(false);

  activeTab = signal<'login' | 'register' | 'forgot'>('login');

  openLogin() {
    this.showLogin.set(true);
  }

  closeLogin() {
    this.showLogin.set(false);
    this.activeTab.set('login');
  }

  switchTab(tab: 'login' | 'register' | 'forgot') {
    this.activeTab.set(tab);
  }
}
