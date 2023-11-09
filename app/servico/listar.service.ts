import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../classe/aluno';

@Injectable({
  providedIn: 'root'
})
export class ListarService {
 
  
  private apiUrl = 'http://localhost:3000/alunos';



constructor(private http:HttpClient) { }
pegarTodos():Observable< Aluno[ ]> {
  return this.http.get< Aluno[ ]>(this.apiUrl);
}

enviarAAluno(dados: any){
  return this.http.post<any>("http://localhost:3000/alunos",dados);
}
remove(id:number){
  return this.http.delete<Aluno>(`${this.apiUrl}/${id}`);
}

getRegistro(id:any){
  return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
}


atualizarRegistro(registro: any): Observable<any> {
  const url = `${this.apiUrl}/${registro.id}`; 
  return this.http.put(url, registro);
}

getAlunoById(id: number) {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get(url);
}

}