import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  nameRol: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nameRol: 'Arquitecto', state: 'Activo'},
  {nameRol: 'Consultor', state: 'Activo'},
  {nameRol: 'Dev', state: 'Activo'},
  {nameRol: 'Gerente de Proyecto', state: 'Activo'},
  {nameRol: 'Líder Técnico', state: 'Activo'},
  {nameRol: 'Practicante', state: 'Activo'},
  {nameRol: 'QA', state: 'Activo'},
  {nameRol: 'Gerente de Proyecto', state: 'Activo'}
];

@Component({
  selector: 'itac-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.scss'],
})
export class AdminRolesComponent implements OnInit {
  state: string[] = ["Activo","Inactivo"];
  displayedColumns: string[] = ['nameRol', 'state',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
