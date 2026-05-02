import { Component } from '@angular/core';

@Component({
  selector: 'app-ptpossess-permit',
  standalone: true,
  templateUrl: './ptpossess-permit-component.html',
  styleUrls: ['./ptpossess-permit-component.css']
})
export class PTPossessPermitComponent {

  print() {
    window.print();
  }
}
