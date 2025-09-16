import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../Interfaces/iusuario';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {

    private readonly rutaAPI = 'https://localhost:7195/api/Usuarios';

  constructor(private htpp: HttpClient) { }

  async todos():Promise<IUsuario[]>{
    const lista_usuario = this.htpp.get<IUsuario[]>(this.rutaAPI);
    return await firstValueFrom(lista_usuario);
  }
  
}
