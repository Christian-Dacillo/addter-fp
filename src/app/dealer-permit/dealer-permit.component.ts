import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DealerDataService, DealerData } from './dealer-data.service';

@Component({
  selector: 'app-dealer-permit',
  standalone: true,
  templateUrl: './dealer-permit.component.html',
  styleUrls: ['./dealer-permit.component.css']
})
export class DealerPermitComponent {
  data: DealerData;

  constructor(private dataService: DealerDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/dealer-edit']);
  }
}
