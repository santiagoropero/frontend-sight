import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AdminPersonasService } from './admin-personas.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { Person, RequestCreatePerson } from 'src/app/models/admin/person/person';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminRolesService } from '../admin-roles/admin-roles.service';
import { Role } from 'src/app/models/admin/roles/roles';
import { States } from 'src/app/utils/states';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admin-personas',
  templateUrl: './admin-personas.component.html',
  styleUrls: ['./admin-personas.component.scss']
})
export class AdminPersonasComponent implements OnInit {
  state: string[] = ["Activo","Inactivo"];
  roles: Role[] = []
  displayedColumns: string[] = ['iduser','names', 'lastnames', 'roles', 'email', 'state'];
  datasource: Person[] = []
  form: FormGroup;

  constructor(
    private adminPersonasService :AdminPersonasService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder,
    private adminRolesService: AdminRolesService
    ) {
      this.form = this.formBuilder.group({
        numberIdentification: new FormControl('', Validators.required),
        names: new FormControl('', Validators.required),
        lastNames: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        state: new FormControl('Activo'),
        rol: new FormControl('', Validators.required),
      })
    }
  ngOnInit(): void {
    this.form.get('state')?.disable();
    this.loadPersons();
    this.loadRoles();
  }

  loadPersons() {
    this.loadingService.show();
    this.adminPersonasService.getPersons()
    .subscribe(response => {
      this.loadingService.hide();
      this.datasource = response.data.persons;
    })
  }

  loadRoles() {
    this.adminRolesService.getRoles()
    .subscribe(response => {
      this.roles = response.data.roles;
    })
  }

  createPerso() {
    this.loadingService.show();
    const bodyPerson = new RequestCreatePerson();
    bodyPerson.numberIdentification = this.form.get('numberIdentification')?.value;
    bodyPerson.names = this.form.get('names')?.value;
    bodyPerson.lastNames = this.form.get('lastNames')?.value;
    bodyPerson.email = this.form.get('email')?.value;
    bodyPerson.state = States.ACTIVO;
    bodyPerson.rol = this.form.get('rol')?.value;
    this.adminPersonasService.createPerson(bodyPerson)
    .subscribe(response => {
      this.loadingService.hide();
      this.loadPersons();
      this.form.get('numberIdentification')?.setValue('');
      this.form.get('names')?.setValue('')
      this.form.get('lastNames')?.setValue('');
      this.form.get('email')?.setValue('');
      this.form.get('rol')?.setValue('default');
      swal.fire(
        response.messageResponse.responseDetail,
        response.message,
        'success'
      );
    })
  }

}
