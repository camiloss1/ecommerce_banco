import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  loginForm!: FormGroup;
public ValidationMessages = {
  email:[
    {type: 'required',message:'Este campo es requerido'},
    {type: 'pattern',message:'Este campo es de tipo email'}
  ],
  password:[
    {type: 'required',message:'Este campo es requerido'},
    {type: 'minlength',message:'Este campo es de minimo 6 caracteres'}
  ]
}

public get f() {
  return this.loginForm.controls
}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]]
    })
  }

  login() {
    if(this.loginForm.valid)
    {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      //llamado al servicio de login params(email,password)
      // token almacenar en localstorage, usuario informacion almacenarla en localstorage
      localStorage.setItem('token',email+password);
      var usuario = {'name': 'Juan'}
      localStorage.setItem('usuario',JSON.stringify(usuario));
this.router.navigate(['/home'])
Swal.fire({
  title:'Bienvenido!',
  text:'Has iniciado sesión de manera exitosa',
  icon:'success'
})

      return;
    }
    Swal.fire({
      title:'Error!',
      text:'Debes verificar los campos antes de continuar',
      icon:'error'
    })
  }


}
