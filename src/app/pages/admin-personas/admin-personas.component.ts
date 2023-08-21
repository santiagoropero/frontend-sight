import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-personas',
  templateUrl: './admin-personas.component.html',
  styleUrls: ['./admin-personas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPersonasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
