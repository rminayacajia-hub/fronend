import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Login } from './Services/login';
import { IUsuario } from './Interfaces/iusuario';
import { ILogin } from './Interfaces/ilogin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fronend');

  loginform: FormGroup = new FormGroup({ });

  constructor(private loginServicio: Login) {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contrasenia: new FormControl('', [Validators.required])
    }); 
  }
  login() {
    const login: ILogin = {
      email: this.loginform.value.email,
      contrasenia: this.loginform.value.contrasenia
    };
    this.loginServicio.login(login).subscribe({
      next: (usuario)=>{
        
      }
    })

};
}
  