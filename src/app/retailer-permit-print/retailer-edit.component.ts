import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerDataService } from './retailer-data.service';

@Component({
  selector: 'app-retailer-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './retailer-edit.component.html',
  styleUrls: ['./retailer-edit.component.css']
})
export class RetailerEditComponent {
  form;

  constructor(private dataService: RetailerDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/retailer-permit-print']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
