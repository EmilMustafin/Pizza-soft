export type Role = 'driver' | 'waiter' | 'cook' | '';
export interface Employee {
  id: number;
  name: string;
  isArchive: boolean;
  role: Role;
  phone: string;
  birthday: string;
}
