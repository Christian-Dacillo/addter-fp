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

  get makeModels(): string[] {
    return [1,2,3,4,5,6,7,8,9,10]
      .map(i => (this.data as any)['makeModel'+i])
      .filter((v: string) => v);
  }

  get serials(): string[] {
    return Array.from({length: 25}, (_, i) => (this.data as any)['serial'+(i+1)])
      .filter((v: string) => v);
  }

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
