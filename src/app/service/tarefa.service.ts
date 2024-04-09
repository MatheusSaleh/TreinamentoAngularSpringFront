import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../shared/Tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';


  public listarTarefas(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(`${this.apiUrl}/tarefas`);
  }

  public cadastrarTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(`${this.apiUrl}/tarefas`, tarefa);
  }

  public deleteTarefa(id: number): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}/tarefas/${id}`)
  }
}
