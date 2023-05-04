import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userusecase } from 'src/app/domain/usecases/userusecase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private _userUSeCase: Userusecase) { }
  usuario!: any;
  ngOnInit(): void {
    var email = localStorage.getItem("email");
    if (email) {
      this._userUSeCase.getUserByEmail(email).subscribe((data: any) => {
        console.log(data);
        this.usuario = data;
      });
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/outside']);
  }

}
