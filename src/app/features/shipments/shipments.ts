import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipments.html',
  styleUrl: './shipments.scss'
})
export class Shipments {
  shipments = signal([
    {
      id: '#SHP-9281',
      status: 'In Transit',
      client: 'Acme Corp',
      clientInitials: 'AC',
      clientColor: 'bg-purple-100 text-purple-600',
      origin: 'Shanghai, CN',
      destination: 'Los Angeles, USA',
      eta: 'Oct 24, 2023'
    },
    {
      id: '#SHP-9282',
      status: 'Incident',
      client: 'Globex Inc.',
      clientInitials: 'GL',
      clientColor: 'bg-orange-100 text-orange-600',
      origin: 'Berlin, DE',
      destination: 'Paris, FR',
      eta: 'Delayed'
    },
    {
      id: '#SHP-9283',
      status: 'Delivered',
      client: 'Stark Ind.',
      clientInitials: 'ST',
      clientColor: 'bg-blue-100 text-blue-600',
      origin: 'New York, USA',
      destination: 'London, UK',
      eta: 'Oct 20, 2023'
    },
    {
      id: '#SHP-9284',
      status: 'Pending',
      client: 'Wayne Ent.',
      clientInitials: 'WA',
      clientColor: 'bg-emerald-100 text-emerald-600',
      origin: 'Gotham, NJ',
      destination: 'Metropolis, NY',
      eta: 'Oct 26, 2023'
    },
    {
      id: '#SHP-9285',
      status: 'In Transit',
      client: 'Umbrella Corp',
      clientInitials: 'UM',
      clientColor: 'bg-indigo-100 text-indigo-600',
      origin: 'Raccoon City, USA',
      destination: 'Tokyo, JP',
      eta: 'Oct 28, 2023'
    }
  ]);
}
