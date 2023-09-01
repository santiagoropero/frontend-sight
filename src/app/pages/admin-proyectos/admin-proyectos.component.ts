import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  projectname: string;
  projectstartdate: string;
  projectenddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {projectname: 'Help Desk', projectstartdate: "01/11/2023", projectenddate:"15/01/2024"},
  {projectname: 'Ayuditas', projectstartdate: "01/07/2023", projectenddate:"20/09/2023"},
  {projectname: 'Manos Creaciones', projectstartdate: "01/06/2023", projectenddate:"30/08/2023"},
  {projectname: 'Mascotas Felices', projectstartdate: "05/08/2023", projectenddate:"12/11/2023"},
  {projectname: 'Sorro con S', projectstartdate: "27/07/2023", projectenddate:"18/09/2023"},
];

@Component({
  selector: 'app-admin-proyectos',
  templateUrl: './admin-proyectos.component.html',
  styleUrls: ['./admin-proyectos.component.scss']
})
export class AdminProyectosComponent implements OnInit {
  displayedColumns: string[] = ['projectname', 'projectstartdate', 'projectenddate'];
  dataSource = ELEMENT_DATA;
  constructor() { }
 
  ngOnInit(): void {
  }

}
