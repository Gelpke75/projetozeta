import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { InfoComponent } from './paginas/info/info.component';
import { LoginComponent } from './paginas/login/login.component';
import { MainComponent } from './paginas/main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'lancarnotas', component: EditarComponent},
  {path: 'info', component: InfoComponent},
  {path: 'lancarnotas/:id', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
