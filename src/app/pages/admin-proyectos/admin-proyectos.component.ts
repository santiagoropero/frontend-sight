import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  projectname: string;
  projectstartdate: string;
  projectenddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {projectname: 'Andres', projectstartdate: "01/01/2023", projectenddate:"01/01/2023"},
  {projectname: 'Andres', projectstartdate: "01/01/2023", projectenddate:"01/01/2023"}
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
