import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PeriodicDataService} from "../periodic-data.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {map} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-periodic-details',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterLink,
    MatAnchor
  ],
  templateUrl: './periodic-details.component.html',
  styleUrl: './periodic-details.component.scss'
})
export class PeriodicDetailsComponent {

  private periodicDataService = inject(PeriodicDataService);
  readonly periodic = toSignal(inject(ActivatedRoute).params.pipe(
    map(param => param['id']),
    map(id => this.periodicDataService.getById(id))
  ));

  constructor() {
  }
}
