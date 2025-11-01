import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout ],
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.css'
})
export class HeaderLayout {
  protected readonly title = signal('app');
}
