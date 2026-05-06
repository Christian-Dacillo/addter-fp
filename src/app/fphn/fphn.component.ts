import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FphnDataService, FphnData } from './fphn-data.service';

@Component({
  selector: 'app-fphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fphn.component.html',
  styleUrls: ['./fphn.component.css']
})
export class FphnComponent {
  data: FphnData;

  constructor(private dataService: FphnDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/fphn-edit']);
  }
}
