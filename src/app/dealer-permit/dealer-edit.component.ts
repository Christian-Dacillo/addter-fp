import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DealerDataService } from './dealer-data.service';

@Component({
  selector: 'app-dealer-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dealer-edit.component.html',
  styleUrls: ['./dealer-edit.component.css']
})
export class DealerEditComponent {
  form;

  constructor(private dataService: DealerDataService, private router: Router) {
    this.form = { ...this.dataService.data };
  }

  submit() {
    Object.assign(this.dataService.data, this.form);
    this.router.navigate(['/dealer-permit']);
  }

  cancel() {
    this.form = { ...this.dataService.data };
  }
}
