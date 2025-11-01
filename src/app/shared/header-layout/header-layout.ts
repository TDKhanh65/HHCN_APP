import { Component, signal } from '@angular/core';


@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.html',
  styleUrl: './header-layout.css'
})
export class HeaderLayout {
  title = signal('HHCN Application');
}
