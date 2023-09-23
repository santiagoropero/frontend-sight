import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  pryname: string;
  prystartdate: string;
  pryenddate: string;
  prygerente: string;
  prynamecustomer: string;
  prystate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pryname: 'Help Desk', prystartdate: "01/11/2023", pryenddate:"15/01/2024", prygerente: "Diego", prynamecustomer:"Angel Díaz", prystate:"Inactivo"},
  {pryname: 'Ayuditas', prystartdate: "01/07/2023", pryenddate:"20/09/2023", prygerente: "Carlos", prynamecustomer:"Juan Gomez", prystate:"Activo"},
  {pryname: 'Manos Creaciones', prystartdate: "01/06/2023", pryenddate:"30/08/2023", prygerente: "Carlos", prynamecustomer:"Camila Sanchez", prystate:"Activo"},
  {pryname: 'Mascotas Felices', prystartdate: "05/08/2023", pryenddate:"12/11/2023", prygerente: "Diego", prynamecustomer:"Daniel Baez", prystate:"Activo"},
  {pryname: 'Sorro con S', prystartdate: "27/07/2023", pryenddate:"18/09/2023", prygerente: "Carlos", prynamecustomer:"Carlos Suarez", prystate:"Inactivo"}
];

@Component({
  selector: 'app-admin-proyectos',
  templateUrl: './admin-proyectos.component.html',
  styleUrls: ['./admin-proyectos.component.scss']
})
export class AdminProyectosComponent implements OnInit {
  gerencial: string[]=["Diego", "Carlos"];
  namecliente: string[] = ["Angel Díaz","Daniel Baez", "Carlos Suarez", "Camila Sanchez", "Juan Gomez"];
  state: string[] = ["Activo","Inactivo"];
  displayedColumns: string[] = ['pryname', 'prystartdate', 'pryenddate', 'prygerente', 'prynamecustomer', 'prystate'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  
  ngOnInit(): void {
  }

}
