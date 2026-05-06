import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TphnDataService } from './tphn-data.service';

@Component({
  selector: 'app-tphn-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tphn-edit.component.html',
  styleUrls: ['./tphn-edit.component.css']
})
export class TphnEditComponent {
  form;

  constructor(private dataService: TphnDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/tphn']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
