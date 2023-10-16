import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRolesComponent } from './pages/admin-roles/admin-roles.component';
import { AdminPersonasComponent } from './pages/admin-personas/admin-personas.component';
import { AdminClientesComponent } from './pages/admin-clientes/admin-clientes.component';
import { AdminProyectosComponent } from './pages/admin-proyectos/admin-proyectos.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { initializer } from 'src/security/init-keycloak';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';


@NgModule({
  declarations: [
    AppComponent,
    AdminRolesComponent,
    AdminPersonasComponent,
    AdminClientesComponent,
    AdminProyectosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [KeycloakService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
