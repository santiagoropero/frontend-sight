import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  clname: string;
  clphone: number;
  clproyectname:string;
  projectleader: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {clname: 'Angel Díaz', clphone: 3144117717, clproyectname: 'Help Desk', projectleader:'Diego Ropero', state: 'Acuerdo con cliente'},
  {clname: 'Daniel Baez', clphone: 3202757872, clproyectname: 'Ayuditas', projectleader:'David Paez', state: 'Pruebas QA'},
  {clname: 'Carlos Suarez', clphone: 3156849656, clproyectname: 'Manos Creaciones', projectleader:'Andrea Garzon', state: 'Finalizado'},
  {clname: 'Camila Sanchez', clphone: 3112269415, clproyectname: 'Mascotas Felices', projectleader:'Diego Ropero', state: 'En desarrollo'},
  {clname: 'Juan Gomez', clphone: 3108764023, clproyectname: 'Sorro con S', projectleader:'Andrea Garzon', state: 'En pruebas'}
];

@Component({
  selector: 'itac-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {
  liderProyecto: string[] = ["Diego Ropero","David Paez","Andrea Garzon"];
  displayedColumns: string[] = ['names', 'lastnames', 'roles', 'email', 'state'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
 