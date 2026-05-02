import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tphn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tphn.component.html',
  styleUrls: ['./tphn.component.css']
})
export class TphnComponent {

  // SAMPLE TEST DATA (you can replace later)
  data = {
    testText: 'TEST'
  };

  print() {
    window.print();
  }
}
