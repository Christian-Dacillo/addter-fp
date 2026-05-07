import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SphnDataService } from './sphn-data.service';

@Component({
  selector: 'app-sphn-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sphn-edit.component.html',
  styleUrls: ['./sphn-edit.component.css']
})
export class SphnEditComponent {
  form;

  constructor(private dataService: SphnDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/sphn']);
  }

  cancel() { this.form = { ...this.dataService.data }; }
  printPermit() { Object.assign(this.dataService.data, this.form); this.router.navigate(['/sphn']).then(() => setTimeout(() => window.print(), 300)); }
}
