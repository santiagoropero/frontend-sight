import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  clname: string;
  state: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {clname: 'Angel Díaz', state: 'Acuerdo con cliente'},
  {clname: 'Daniel Baez', state: 'Pruebas QA'},
  {clname: 'Carlos Suarez', state: 'Finalizado'},
  {clname: 'Camila Sanchez', state: 'En desarrollo'},
  {clname: 'Juan Gomez',  state: 'En pruebas'}
];

@Component({
  selector: 'itac-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {
  state: string[] = ["Acuerdo con cliente", "En desarrollo", "En pruebas", "QA", "Finalizado"];
  displayedColumns: string[] = ['names','state'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
 