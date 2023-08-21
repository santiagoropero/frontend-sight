import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AdminRolesComponent } from './pages/admin-roles/admin-roles.component';
import { AdminPersonasComponent } from './pages/admin-personas/admin-personas.component';
import { AdminClientesComponent } from './pages/admin-clientes/admin-clientes.component';
import { AdminProyectosComponent } from './pages/admin-proyectos/admin-proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminRolesComponent,
    AdminPersonasComponent,
    AdminClientesComponent,
    AdminProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
