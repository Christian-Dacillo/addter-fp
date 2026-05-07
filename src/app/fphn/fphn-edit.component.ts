import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FphnDataService } from './fphn-data.service';

@Component({
  selector: 'app-fphn-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fphn-edit.component.html',
  styleUrls: ['./fphn-edit.component.css']
})
export class FphnEditComponent {
  form;

  constructor(private dataService: FphnDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/fphn']);
  }

  cancel() { this.form = { ...this.dataService.data }; }
  printPermit() { Object.assign(this.dataService.data, this.form); this.router.navigate(['/fphn']).then(() => setTimeout(() => window.print(), 300)); }
}
