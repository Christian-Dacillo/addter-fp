import { Component } from '@angular/core';

@Component({
  selector: 'app-retailer-permit-print',
  standalone: true,
  templateUrl: './retailer-permit-print.component.html',
  styleUrls: ['./retailer-permit-print.component.css']
})
export class RetailerPermitComponent {

  print() {
    window.print();
  }
}
