import { Component, OnInit } from '@angular/core';
import { AdminClientesService } from './admin-clientes.service';
import { Client, RequestCreateClient } from 'src/app/models/admin/client/cliente';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { States } from 'src/app/utils/states';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'itac-admin-clientes',
  templateUrl: './admin-clientes.component.html',
  styleUrls: ['./admin-clientes.component.scss']
})
export class AdminClientesComponent implements OnInit {
  datasource: Client[] = [];
  displayedColumns: string[] = ['nameClient','state'];
  statusList: string[] = ["Activo","Inactivo"];
  form: FormGroup;
  constructor(
    private adminClientesService:AdminClientesService,
    private formBuilder: FormBuilder,
    private loadingService: LoadingService) {
      this.form = this.formBuilder.group({
        name: new FormControl('', Validators.required),
        state: new FormControl('Activo')
      })
    }

  ngOnInit(): void {
    this.form.get('state')?.disable();
    this.loadClientes();
  }

  loadClientes() {
    this.loadingService.show();
    this.adminClientesService.getClients()
    .subscribe(response => {
      this.loadingService.hide();
      this.datasource = response.data.clients;
    })
  }

  createClient() {
    this.loadingService.show();
    const client = new RequestCreateClient();
    client.name = this.form.get('name')?.value;
    client.state = States.ACTIVO;
    this.adminClientesService.createClient(client)
    .subscribe(response => {
      this.loadingService.hide();
      this.loadClientes();
      this.form.get('name')?.setValue('');
      swal.fire(
        response.messageResponse.responseDetail,
        response.message,
        'success'
      );
    })
  }

}
