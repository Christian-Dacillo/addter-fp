import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frtg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frtg.component.html',
  styleUrls: ['./frtg.component.css']
})
export class FRTGComponent {

  // SAMPLE TEST DATA (you can replace later)
  data = {
    testText: 'TEST'
  };

  print() {
    window.print();
  }
}
