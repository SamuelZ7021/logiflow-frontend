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
  isModalOpen = signal(false);

  // 1. Convertimos la lista en un Signal
  customers = signal([
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
  ]);

onAddCustomer(){
    this.notify.show('Opening "Add Customer" modal...')
    this.toggleModal();
  }

  onExpor(){
    this.notify.show('Exporting customers...')
  }

  viewCustomerDetails(id: string){
    this.notify.show(`Viewing details for customer ${id}`)
  }

  

  toggleModal() {
    this.isModalOpen.update(value => !value);
  }

  // 2. Actualizamos la función para guardar
  handleSaveCustomer(data: any) {
    // Creamos el objeto con el formato de la tabla
    const newCustomer = {
      id: `#${Math.floor(Math.random() * 9000) + 1000}`, // ID aleatorio para el mock
      name: data.name,
      industry: data.industry || 'General',
      contact: data.contactName,
      activeShipments: 0,
      status: data.status,
      initials: data.name.substring(0, 2).toUpperCase(),
      color: 'bg-purple-100 text-purple-600'
    };

    // Actualizamos el Signal (esto refresca la tabla automáticamente)
    this.customers.update(current => [...current, newCustomer]);
    
    this.notify.show('Customer created successfully!');
  }
}