import { Component, OnInit } from '@angular/core';
import { ResponseAllRolData, Role } from 'src/app/models/admin/rol/roles';
import { AdminRolesService } from './admin-roles.service';

@Component({
  selector: 'itac-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.scss'],
})
export class AdminRolesComponent implements OnInit {

  dataSource: Role[] = [];

  state: string[] = ["Activo","Inactivo"];
  displayedColumns: string[] = ['nameRol', 'state',];
  constructor(private adminRolesService: AdminRolesService) { }

  ngOnInit(): void {
    this.adminRolesService.getRoles()
    .subscribe(response => {
      this.dataSource = response.data.roles;
    })
  }

}
