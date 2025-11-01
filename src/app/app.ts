import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './shared/header-layout/header-layout';
import { LoginScreenComponent } from './login/login-screen/login-screen-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout, LoginScreenComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');
}
