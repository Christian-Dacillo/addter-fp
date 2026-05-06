import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RslDataService } from './rsl-data.service';

@Component({
  selector: 'app-rsl-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rsl-edit.component.html',
  styleUrls: ['./rsl-edit.component.css']
})
export class RslEditComponent {
  form;

  constructor(private dataService: RslDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/rsl']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
