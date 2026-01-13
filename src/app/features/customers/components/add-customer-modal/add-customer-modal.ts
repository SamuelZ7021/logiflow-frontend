import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-customer-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-customer-modal.html',
})
export class AddCustomerModal {
  close = output<void>();
  save = output<any>();

  customerData = {
    name: '',
    industry: '',
    contactName: '',
    status: 'Active'
  };
  

  onSave() {
    this.save.emit(this.customerData);
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
