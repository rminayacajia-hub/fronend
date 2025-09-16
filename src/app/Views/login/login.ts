import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Login } from '../../Services/login';
import { ILogin } from '../../Interfaces/ilogin';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class login {
  loginform:FormGroup=new FormGroup({});
  constructor (private loginServicio: Login,private rutas:Router){
    this.loginform=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      contrasenia:new FormControl('',[Validators.required])
    });
  }

  login(){
    const login:ILogin={
      email: this.loginform.value.email,
      contrasenia: this.loginform.value.contrasenia,
    };
    this.loginServicio.login(login).subscribe({
      next:(usuario)=>{
        //continuar 
      }
    })
  }


}
