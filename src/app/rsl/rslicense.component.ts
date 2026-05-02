import { Component } from '@angular/core';

@Component({
  selector: 'app-rsl',
  standalone: true,
  templateUrl: './rslicense.component.html',
  styleUrls: ['./rslicense.component.css']
})
export class RslicenseComponent {
  print() {
    window.print();
  }
}
