import { Component, OnInit } from '@angular/core';
import { ResponseAllRolData, Role } from 'src/app/models/admin/roles/roles';
import { AdminRolesService } from './admin-roles.service';
import { RequestCreateRol } from '../../models/admin/roles/roles';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { States } from 'src/app/utils/states';

@Component({
  selector: 'itac-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.scss'],
})
export class AdminRolesComponent implements OnInit {

  dataSource: Role[] = [];
  state: string[] = ["Activo","Inactivo"];
  displayedColumns: string[] = ['nameRol', 'state',];
  form: FormGroup;
  constructor(
    private adminRolesService: AdminRolesService,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        state: new FormControl('Activo')
      })
  }

  ngOnInit(): void {
    this.form.get('state')?.disable();
    this.loadRoles();
  }

  loadRoles() {
    this.adminRolesService.getRoles()
    .subscribe(response => {
      this.dataSource = response.data.roles;
    })
  }


  createRol() {
    const rol = new RequestCreateRol();
    rol.name = this.form.get('name')?.value;
    rol.state = States.ACTIVO;
    this.adminRolesService.createRol(rol)
    .subscribe(response => {
      this.form.get('name')?.setValue('');
      this.loadRoles();
      swal.fire(
        response.messageResponse.responseDetail,
        response.message,
        'success'
      );
    });
  }

}
