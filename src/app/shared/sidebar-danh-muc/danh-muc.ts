import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-danh-muc',
  templateUrl: './danh-muc.html',
  styleUrls: ['./danh-muc.css']
})
export class DanhMuc {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
