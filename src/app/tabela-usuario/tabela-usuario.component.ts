import { Component } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../shared/Usuario.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabela-usuario',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tabela-usuario.component.html',
  styleUrl: './tabela-usuario.component.css'
})
export class TabelaUsuarioComponent {

  constructor(private usuarioService: UsuarioService) { }

  public usuarios: Usuario[] = [];

  public usuarioParaCadastrar: Usuario = new Usuario();

  ngOnInit() {
    this.buscarUsuarios();
  }

  public buscarUsuarios(): void{
    this.usuarioService.listarUsuarios().subscribe(
      (usuarios: Usuario[]) => {
        console.log(usuarios);
        this.usuarios = usuarios;
      }
    );
  }

  public cadastrarUsuario(): void{
    this.usuarioService.cadastrarUsuario(this.usuarioParaCadastrar).subscribe();
    window.location.reload();
  }

  public deletarUsuario(usuario: Usuario): void{
    if(usuario.id != null){
      this.usuarioService.deletarUsuario(usuario.id).subscribe();
      window.location.reload();
    }
  }

}
