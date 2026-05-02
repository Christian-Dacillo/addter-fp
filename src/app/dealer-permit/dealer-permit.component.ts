import { Component } from '@angular/core';

@Component({
  selector: 'app-dealer-permit',
  standalone: true,
  templateUrl: './dealer-permit.component.html',
  styleUrls: ['./dealer-permit.component.css']
})
export class DealerPermitComponent {

  print() {
    window.print();
  }
}