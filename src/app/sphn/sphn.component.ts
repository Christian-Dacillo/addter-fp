import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SphnDataService, SphnData } from './sphn-data.service';

@Component({
  selector: 'app-sphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sphn.component.html',
  styleUrls: ['./sphn.component.css']
})
export class SphnComponent {
  data: SphnData;

  constructor(private dataService: SphnDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/sphn-edit']);
  }
}
