import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface PeriodicElement {
  names: string;
  lastnames: string;
  roles: string;
  email: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {names: 'Andres', lastnames: 'Cuevas', roles: 'Arquitecto', email:'acuevas@itac.co', state: 'Activo'},
  {names: 'Andrea', lastnames: 'Garzon', roles: 'Consultor', email:'agarzon@itac.co', state: 'Activo'},
  {names: 'Camila', lastnames: 'Diaz', roles: 'Dev', email:'cdiaz@itac.co', state: 'Inactivo'},
  {names: 'David', lastnames: 'Paez', roles: 'Gerente de proyecto', email:'dpaez@itac.co', state: 'Activo'},
  {names: 'Diego', lastnames: 'Ropero', roles: 'Lider de proyecto', email:'dropero@itac.co', state: 'Activo'}
];

@Component({
  selector: 'app-admin-personas',
  templateUrl: './admin-personas.component.html',
  styleUrls: ['./admin-personas.component.scss']
})
export class AdminPersonasComponent implements OnInit {
  rol: string[] = ["Arquitecto","Consultor","Dev", "Gerente de proyecto", "Lider técnico", "Practicante", "QA", "Gerente de proyecto"];
  displayedColumns: string[] = ['names', 'lastnames', 'roles', 'email', 'state'];
  dataSource = ELEMENT_DATA;

  constructor() { }
  ngOnInit(): void {
  }

}
