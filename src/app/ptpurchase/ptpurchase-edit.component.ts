import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PTPurchaseDataService } from './ptpurchase-data.service';

@Component({
  selector: 'app-ptpurchase-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ptpurchase-edit.component.html',
  styleUrls: ['./ptpurchase-edit.component.css']
})
export class PTPurchaseEditComponent {
  form;

  constructor(private dataService: PTPurchaseDataService, private router: Router) {
    // Clone current data into local form object
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/ptpurchase']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }

  printPermit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/ptpurchase']).then(() => {
      setTimeout(() => window.print(), 300);
    });
  }

  printData() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/ptpurchase']).then(() => {
      setTimeout(() => {
        document.body.classList.add('data-only');
        window.print();
        document.body.classList.remove('data-only');
      }, 300);
    });
  }
}
