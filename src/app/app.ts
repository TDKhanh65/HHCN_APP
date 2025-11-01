import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './shared/header-layout/header-layout';
import { LoginScreenComponent } from './login/login-screen/login-screen-component';
import { DanhMuc } from './shared/sidebar-danh-muc/danh-muc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginScreenComponent, HeaderLayout, DanhMuc],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app');
}
