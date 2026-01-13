export interface Customer {
  id: string;
  name: string;
  industry: string;
  contactName: string;
  contactAvatar: string;
  activeShipments: number;
  status: 'Active' | 'Inactive' | 'Pending';
  initials: string;
  color: string;
}