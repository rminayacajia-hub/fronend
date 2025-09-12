import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../Interfaces/iusuario';
import { Login } from '../../Services/login';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard  implements OnInit {
  lista_usuario: IUsuario[] = [];

  constructor(private usuariosServicio: Login ) { }

  ngOnInit(): void {
    this.usuariosServicio.todos_usuarios().subscribe((lista) => {
      // Aquí puedes manejar la lista de usuarios recibida
      this.lista_usuario = lista;
    });

  }
}
