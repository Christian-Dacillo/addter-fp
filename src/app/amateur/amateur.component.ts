import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmateurDataService, AmateurData } from './amateur-data.service';

@Component({
  selector: 'app-amateur',
  standalone: true,
  templateUrl: './amateur.component.html',
  styleUrls: ['./amateur.component.css']
})
export class AmateurComponent {
  data: AmateurData;

  constructor(private dataService: AmateurDataService, private router: Router) {
    this.data = this.dataService.data;
  }

  print() {
    window.print();
  }

  goToEdit() {
    this.router.navigate(['/amateur-edit']);
  }
}
