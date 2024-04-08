import { Routes } from '@angular/router';
import { TabelaUsuarioComponent } from './tabela-usuario/tabela-usuario.component';
import { TarefaComponent } from './tarefa/tarefa.component';

export const routes: Routes = [
    {path: '', component: TabelaUsuarioComponent},
    {path: 'tarefas', component: TarefaComponent}
];
