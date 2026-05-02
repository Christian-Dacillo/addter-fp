import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fphn.component.html',
  styleUrls: ['./fphn.component.css']
})
export class FphnComponent {

  // SAMPLE TEST DATA (you can replace later)
  data = {
    testText: 'TEST'
  };

  print() {
    window.print();
  }
}
