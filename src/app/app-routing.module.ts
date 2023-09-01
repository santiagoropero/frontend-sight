import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRolesComponent } from './pages/admin-roles/admin-roles.component';
import { AdminClientesComponent } from './pages/admin-clientes/admin-clientes.component';
import { AdminProyectosComponent } from './pages/admin-proyectos/admin-proyectos.component';
import { AdminPersonasComponent } from './pages/admin-personas/admin-personas.component';

const routes: Routes = [
  {path: 'admin-roles', component: AdminRolesComponent},
  {path: 'admin-proyectos', component: AdminProyectosComponent},
  {path: 'admin-personas', component: AdminPersonasComponent},
  {path: 'admin-clientes', component: AdminClientesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'admin-roles'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
