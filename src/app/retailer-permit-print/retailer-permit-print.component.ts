import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerDataService, RetailerData } from './retailer-data.service';

@Component({
  selector: 'app-retailer-permit-print',
  standalone: true,
  templateUrl: './retailer-permit-print.component.html',
  styleUrls: ['./retailer-permit-print.component.css']
})
export class RetailerPermitComponent {
  data: RetailerData;

  constructor(private dataService: RetailerDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/retailer-edit']);
  }
}
