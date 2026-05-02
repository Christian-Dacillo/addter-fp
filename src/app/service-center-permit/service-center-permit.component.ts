import { Component } from '@angular/core';

@Component({
  selector: 'app-service-center-permit',
  standalone: true,
  templateUrl: './service-center-permit.component.html',
  styleUrls: ['./service-center-permit.component.css']
})
export class ServiceCenterPermitComponent {
  print() {
    window.print();
  }
}
