import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FRTGDataService, FRTGData } from './frtg-data.service';

@Component({
  selector: 'app-frtg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frtg.component.html',
  styleUrls: ['./frtg.component.css']
})
export class FRTGComponent {
  data: FRTGData;

  constructor(private dataService: FRTGDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/frtg-edit']);
  }
}
