import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../core/services/nortificiation';
import { AddCustomerModal } from './components/add-customer-modal/add-customer-modal';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, AddCustomerModal],
  templateUrl: './customers.html'
})
export class Customers {
  private notify = inject(NotificationService);

  onAddCustomer(){
    this.notify.show('Opening "Add Customer" modal...')
  }

  onExpor(){
    this.notify.show('Exporting customers...')
  }

  viewCustomerDetails(id: string){
    this.notify.show(`Viewing details for customer ${id}`)
  }

  isModalOpen = signal(false);

  toggleModal() {
    this.isModalOpen.update(value => !value);
  }

  handleSaveCustomer(data: any) {
    console.log('New Customer:', data);
  }

  customers = [
    {
      id: '#9921',
      name: 'TechGlobal Inc.',
      industry: 'Technology / Enterprise',
      contact: 'Sarah Jenkins',
      activeShipments: 12,
      status: 'Active',
      initials: 'TG',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: '#8832',
      name: 'FastMove Logistics',
      industry: 'Logistics / Partner',
      contact: 'Mike Ross',
      activeShipments: 0,
      status: 'Inactive',
      initials: 'FM',
      color: 'bg-orange-100 text-orange-600'
    }
  ];
}