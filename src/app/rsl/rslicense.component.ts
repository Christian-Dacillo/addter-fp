import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RslDataService, RslData } from './rsl-data.service';

@Component({
  selector: 'app-rsl',
  standalone: true,
  templateUrl: './rslicense.component.html',
  styleUrls: ['./rslicense.component.css']
})
export class RslicenseComponent {
  data: RslData;

  constructor(private dataService: RslDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/rsl-edit']);
  }
}
