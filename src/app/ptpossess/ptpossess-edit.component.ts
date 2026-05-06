import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { PTPossessDataService } from './ptpossess-data.service';

@Component({
  selector: 'app-ptpossess-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './ptpossess-edit.component.html',
  styleUrls: ['./ptpossess-edit.component.css']
})
export class PTPossessEditComponent {
  form;

  constructor(private dataService: PTPossessDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/ptpossess']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
