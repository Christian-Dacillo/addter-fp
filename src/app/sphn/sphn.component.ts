import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sphn.component.html',
  styleUrls: ['./sphn.component.css']
})
export class SphnComponent {

  // SAMPLE TEST DATA (you can replace later)
  data = {
    testText: 'TEST'
  };

  print() {
    window.print();
  }
}
