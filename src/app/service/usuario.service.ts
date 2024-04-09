import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../shared/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  public listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios`, usuario);
  }

  public deletarUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.apiUrl}/usuarios/${id}`)
  }

}
