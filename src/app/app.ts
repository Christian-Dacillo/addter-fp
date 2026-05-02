import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  openPermit(path: string) {
    window.open(path, '_blank');
  }

  isPrintRoute(): boolean {
    return [
      '/retailer-permit-print',
      '/dealer-permit',
      '/service-center-permit',
      '/ptpurchase',
      '/ptpurchase-edit',
      '/ptpossess',
      '/rsl',
      '/amateur',
      '/fphn',
      '/sphn',
      '/tphn',
      '/frtg'
    ].includes(this.router.url);
  }
}
