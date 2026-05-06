import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TphnDataService, TphnData } from './tphn-data.service';

@Component({
  selector: 'app-tphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tphn.component.html',
  styleUrls: ['./tphn.component.css']
})
export class TphnComponent {
  data: TphnData;

  constructor(private dataService: TphnDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/tphn-edit']);
  }
}
