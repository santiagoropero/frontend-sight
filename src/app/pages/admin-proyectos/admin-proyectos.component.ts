import { Component, OnInit } from '@angular/core';
import { AdminPersonasService } from '../admin-personas/admin-personas.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { AdminProyectosService } from './admin-proyectos.service';
import { Project, RequestCreateProject } from 'src/app/models/admin/project/project';
import { Person } from 'src/app/models/admin/person/person';
import { AdminClientesService } from '../admin-clientes/admin-clientes.service';
import { Client } from 'src/app/models/admin/client/cliente';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';
import { States } from 'src/app/utils/states';

@Component({
  selector: 'app-admin-proyectos',
  templateUrl: './admin-proyectos.component.html',
  styleUrls: ['./admin-proyectos.component.scss']
})
export class AdminProyectosComponent implements OnInit {
  listPersonsManagers: Person[] = []
  listClients: Client[] = []
  state: string[] = ["Activo","Inactivo"];
  displayedColumns: string[] = ['pryname', 'prystartdate', 'pryenddate', 'prygerente', 'prynamecustomer', 'prystate'];
  datasource: Project[] = [];
  form: FormGroup;

  constructor(
    private adminProyectosService: AdminProyectosService,
    private adminPersonasService :AdminPersonasService,
    private loadingService: LoadingService,
    private adminClientesService: AdminClientesService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
    ) {
      this.form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        startDate: new FormControl('', Validators.required),
        endDate: new FormControl('', Validators.required),
        personManager: new FormControl('', Validators.required),
        client: new FormControl('', Validators.required),
        state: new FormControl('Activo'),
      })
     }

  ngOnInit(): void {
    this.form.get('state')?.disable();
    this.loadProjects();
    this.loadPersons();
    this.loadClients();
  }


  loadProjects() {
    this.loadingService.show();
    this.adminProyectosService.getProjects()
    .subscribe(response => {
      this.loadingService.hide();
      this.datasource = response.data.projects;
    })
  }

  loadPersons() {
    this.adminPersonasService.getPersons()
    .subscribe(response => {
      this.listPersonsManagers = response.data.persons.filter(data => data.rol.name == 'Gerente de Proyectos');
    })
  }

  loadClients() {
    this.adminClientesService.getClients()
    .subscribe(response => {
      this.listClients = response.data.clients;
    })
  }


  createProject() {
    this.loadingService.show();
    const bodyProject = new RequestCreateProject();
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;

    const startDateFormat: string | null = this.datePipe.transform(startDate, 'yyyy-MM-dd', '', 'es-CL')
    const endDateFormat: string | null = this.datePipe.transform(endDate, 'yyyy-MM-dd', '', 'es-CL');

    bodyProject.name = this.form.get('name')?.value;
    bodyProject.client = this.form.get('client')?.value;
    bodyProject.person = this.form.get('personManager')?.value;
    bodyProject.dateStart = startDateFormat;
    bodyProject.dateEnd = endDateFormat;
    bodyProject.state = States.ACTIVO;
    this.adminProyectosService.createProject(bodyProject)
    .subscribe(response => {
      this.loadingService.hide();
      this.loadProjects();
      this.form.get('name')?.setValue('');
      this.form.get('startDate')?.setValue('')
      this.form.get('endDate')?.setValue('');
      this.form.get('personManager')?.setValue('');
      this.form.get('client')?.setValue('');
      swal.fire(
        response.messageResponse.responseDetail,
        response.message,
        'success'
      );
    })
  }

}
