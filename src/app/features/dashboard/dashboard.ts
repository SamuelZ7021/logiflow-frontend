import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  recentShipments = signal([
    {
      id: '#SHP-2049',
      customer: 'Acme Corp',
      customerInitial: 'A',
      route: 'NY → LA',
      eta: 'Oct 24, 2023',
      status: 'In Transit'
    },
    {
      id: '#SHP-2050',
      customer: 'Globex Inc',
      customerInitial: 'G',
      route: 'TX → FL',
      eta: 'Oct 25, 2023',
      status: 'Delivered'
    },
    {
      id: '#SHP-2051',
      customer: 'Soylent Corp',
      customerInitial: 'S',
      route: 'WA → OR',
      eta: 'Oct 26, 2023',
      status: 'Delayed'
    },
    {
      id: '#SHP-2052',
      customer: 'Initech',
      customerInitial: 'I',
      route: 'IL → MI',
      eta: 'Oct 24, 2023',
      status: 'In Transit'
    }
  ]);
}
