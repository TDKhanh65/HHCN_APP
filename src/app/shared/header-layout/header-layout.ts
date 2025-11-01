import { Component, signal } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.html',
  styleUrls: ['./header-layout.css']
})
export class HeaderLayout {
  title = signal('Application');
}
