import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { AmateurDataService } from './amateur-data.service';

@Component({
  selector: 'app-amateur-edit',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './amateur-edit.component.html',
  styleUrls: ['./amateur-edit.component.css']
})
export class AmateurEditComponent {
  form;
  equipNums = Array.from({length: 40}, (_, i) => i + 1);

  constructor(private dataService: AmateurDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/amateur']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
