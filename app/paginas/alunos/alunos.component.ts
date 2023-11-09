import { Component } from '@angular/core';
import { Aluno } from 'src/app/classe/aluno';
import { ListarService } from 'src/app/servico/listar.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

alunos: Aluno [] = []


displayedColumns = ['nome','email','telefone','excluir','editar']

constructor(private listarServico:ListarService) { 
  this.pegarAlunos();
 
}
pegarAlunos():void{
  this.listarServico.pegarTodos().subscribe((alunos:any) => (this.alunos = alunos));
}

removerAlunos(alunos: Aluno){
  //console.log(alunos)
  this.alunos = this.alunos.filter((a)=> alunos.nome !== a.nome);
   this.listarServico.remove(alunos.id).subscribe();
  }

  editarAlunos(alunos:any){

  }


}
