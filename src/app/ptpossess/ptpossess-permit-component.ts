import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { PTPossessDataService, PTPossessData } from './ptpossess-data.service';

@Component({
  selector: 'app-ptpossess-permit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ptpossess-permit-component.html',
  styleUrls: ['./ptpossess-permit-component.css']
})
export class PTPossessPermitComponent {
  data: PTPossessData;

  constructor(private dataService: PTPossessDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/ptpossess-edit']);
  }
}
