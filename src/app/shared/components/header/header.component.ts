import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/models/security/user';

@Component({
  selector: 'itac-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  userLoggedIn: User | undefined;

  constructor(private observer: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private authService: AuthService) { }

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
    this.userLoggedIn = this.authService.getUsername();
  }

  logout(): void {
    this.authService.logout();
  }

}
