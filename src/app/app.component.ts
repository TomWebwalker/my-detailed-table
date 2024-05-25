import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {MatAnchor} from "@angular/material/button";
import {PeriodicDataService} from "./periodic-data.service";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatAnchor, RouterLink, MatDrawerContainer, MatDrawer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly router = inject(Router);
  readonly periodicData = inject(PeriodicDataService).getData();
  title = 'my-detailed-table';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'details'];
  sideBarOpen = false;

  drawerClosed(): void {
    this.router.navigate(['']);
  }
}
