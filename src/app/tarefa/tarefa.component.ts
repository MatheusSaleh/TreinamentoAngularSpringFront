import { Component } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../shared/Tarefa.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../shared/Usuario.model';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {


  constructor(private tarefaService: TarefaService, private usuarioService: UsuarioService) { }


  public tarefas: Tarefa[] = [];

  public tarefaParaCadastrar: Tarefa = new Tarefa();

  public usuarios: Usuario[] = [];


  ngOnInit() {
    this.buscarTarefas();
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

  public buscarTarefas(): void{
    this.tarefaService.listarTarefas().subscribe(
      (tarefas: Tarefa[]) => {
        console.log(tarefas);
        this.tarefas = tarefas;
      }
    );
  }

  public cadastrarTarefa(): void{
    this.tarefaService.cadastrarTarefa(this.tarefaParaCadastrar).subscribe();
    console.log(this.tarefaParaCadastrar)
    this.buscarTarefas();
  
  }

  public deletarTarefa(tarefa: Tarefa): void{
    if (tarefa.id) {
      this.tarefaService.deleteTarefa(tarefa.id).subscribe();
      window.location.reload();
    }

  }
}
