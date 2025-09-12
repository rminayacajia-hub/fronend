import { Injectable } from '@angular/core';
import { ILogin } from '../Interfaces/ilogin';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/iusuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Login {
    private readonly rutaAPI = 'https://localhost:7112/api/Usuarios';
  constructor(private http: HttpClient) {}

   login(ilogin: ILogin): Observable<IUsuario> {
    ilogin.email = "rminaya@gmail.com";
    ilogin.contrasenia = "123";
    return this.http.post<IUsuario>(this.rutaAPI + '/login', ilogin);

  }
  
  todos_usuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.rutaAPI);
  } 
}
