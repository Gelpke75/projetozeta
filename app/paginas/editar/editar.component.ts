import { Component, OnInit  } from '@angular/core';
import { ListarService } from 'src/app/servico/listar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
registro: any

constructor(private router: Router, private route: ActivatedRoute, private listarServico:ListarService) {}
  
    ngOnInit() {
      const id =  this.route.snapshot.paramMap.get('id');
     
      this.listarServico.getRegistro(id).subscribe(registro => {
        this.registro = registro;
      });
    }


salvarEdicao(){

  this.listarServico.atualizarRegistro(this.registro).subscribe(() => {
    this.router.navigate(['/pacientes']);
  });

}
}