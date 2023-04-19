import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  usuario!: any;
  ngOnInit(): void {
    var userStorage = localStorage.getItem('usuario')
    if (userStorage) {
      this.usuario = JSON.parse(userStorage);
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/outside']);
  }

}
