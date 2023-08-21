import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'itac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
    private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)'])
    .subscribe(response => {
      if(response.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
        this.changeDetector.detectChanges();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.changeDetector.detectChanges();
      }
    });
  }

  ngOnInit(): void {
  }

}
