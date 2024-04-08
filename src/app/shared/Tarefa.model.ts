import { Usuario } from "./Usuario.model";

export class Tarefa{
  public id: number | undefined;
  public usuario: Usuario | undefined;
  public titulo: string | undefined;
  public descricao: string | undefined;
  public situacao: string | undefined;
}
 