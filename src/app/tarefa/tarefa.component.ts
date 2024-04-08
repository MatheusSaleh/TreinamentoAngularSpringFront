import { Component } from '@angular/core';
import { TarefaService } from '../service/tarefa.service';
import { Tarefa } from '../shared/Tarefa.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {


  constructor(private tarefaService: TarefaService) { }


  public tarefas: Tarefa[] = [];


  ngOnInit() {
    this.buscarTarefas();
  }

  public buscarTarefas(): void{
    this.tarefaService.listarTarefas().subscribe(
      (tarefas: Tarefa[]) => {
        console.log(tarefas);
        this.tarefas = tarefas;
      }
    );
  }

  public deletarTarefa(tarefa: Tarefa): void{
    if (tarefa.id) {
      this.tarefaService.deleteTarefa(tarefa.id).subscribe();
      window.location.reload();
    }

  }
}
