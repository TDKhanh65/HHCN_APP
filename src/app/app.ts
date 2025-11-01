import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './shared/header-layout/header-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
