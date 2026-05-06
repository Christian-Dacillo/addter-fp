import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FRTGDataService } from './frtg-data.service';

@Component({
  selector: 'app-frtg-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frtg-edit.component.html',
  styleUrls: ['./frtg-edit.component.css']
})
export class FRTGEditComponent {
  form;

  constructor(private dataService: FRTGDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/frtg']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
