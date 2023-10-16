import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { User } from './models/security/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) { }

  logout(): void {
    this.keycloakService.logout();
  }

  getUsername() {
    const user = new User();
    this.keycloakService.loadUserProfile()
    .then(profile => {
      // Agregar los demas atributos si se llegasen a necesitar
      user.id = profile.id;
      user.firstName = profile.firstName;
      user.lastName = profile.lastName;
    }).catch(error => {
      console.warn("Error load profile the user", error);
    });
    return user;
  }
}
