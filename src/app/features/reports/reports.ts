import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports {
  topRoutes = signal([
    { name: 'NY-LA', percentage: 85 },
    { name: 'CHI-MIA', percentage: 65 },
    { name: 'DAL-NY', percentage: 45 },
    { name: 'LA-SEA', percentage: 30 },
    { name: 'MIA-HOU', percentage: 20 },
  ]);

  recentAlerts = signal([
    {
      id: 1,
      type: 'Delay',
      typeColor: 'bg-red-100 text-red-700',
      icon: 'lucide-clock',
      shipmentId: 'SHP-2991',
      message: 'Customs clearance hold in Rotterdam',
      date: '2 hours ago',
      action: 'Resolve'
    },
    {
      id: 2,
      type: 'Exception',
      typeColor: 'bg-amber-100 text-amber-700',
      icon: 'lucide-alert-triangle',
      shipmentId: 'SHP-3022',
      message: 'Address verification failed for recipient',
      date: '5 hours ago',
      action: 'Resolve'
    },
    {
      id: 3,
      type: 'Update',
      typeColor: 'bg-blue-100 text-blue-700',
      icon: 'lucide-info',
      shipmentId: 'SHP-1004',
      message: 'Carrier rerouted due to weather',
      date: '1 day ago',
      action: 'Dismiss'
    }
  ]);
}
