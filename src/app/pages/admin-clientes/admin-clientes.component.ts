import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from './admin-clientes.service';
import { Client } from 'src/app/models/admin/client/cliente';

@Component({
  selector: 'itac-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {
  datasource: Client[] = [];
  displayedColumns: string[] = ['names','state'];
  statusList: string[] = ["Activo","Inactivo"];
  constructor(private adminClientesService:AdminClientesService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes() {
    this.adminClientesService.getClients()
    .subscribe(response => {
      this.datasource = response.data.clients;
    })
  }

}
