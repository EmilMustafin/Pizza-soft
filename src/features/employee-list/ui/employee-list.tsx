import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Employee } from '@/entities/employee';
import { Select } from '@/shared/ui/select/select';
import styles from './employee-list.module.scss';
import { filterAndSortEmployees } from '../lib/filter-sort-employees';
interface Props {
  employees: Employee[];
}

const roles = [
  { value: 'cook', label: 'Cook' },
  { value: 'waiter', label: 'Waiter' },
  { value: 'driver', label: 'Driver' },
];

export const EmployeeList = ({ employees }: Props) => {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showArchived, setShowArchived] = useState<boolean>(false);

  const sortedEmployees = filterAndSortEmployees(employees, selectedRole, showArchived, sortBy);

  return (
    <div>
      <Select
        id='sortBy'
        label='Sort By'
        options={[
          { value: 'name', label: 'Name' },
          { value: 'dob', label: 'Date of Birth' },
        ]}
        value={sortBy}
        onChange={setSortBy}
      />

      <Select
        id='filterRole'
        label='Filter by Role'
        options={roles}
        value={selectedRole}
        onChange={setSelectedRole}
      />

      <label className={styles.label_archive}>
        <input
          type='checkbox'
          checked={showArchived}
          onChange={(e) => setShowArchived(e.target.checked)}
        />
        <span className={styles.archive_text}>в архиве</span>
      </label>

      {sortedEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul className={styles.list}>
          {sortedEmployees.map((employee) => (
            <Link key={employee.id} to={`employee/${employee.id}`} className={styles.link}>
              <li className={styles.item}>
                <h3 className={styles.name}>{employee.name}</h3>
                <p className={styles.label}>Role:</p>
                <p className={styles.role}>{employee.role}</p>
                <p className={styles.label}>Phone:</p>
                <p className={styles.phone}>{employee.phone}</p>
                <p className={styles.label}>Date of Birth:</p>
                <p className={styles.dob}>{employee.birthday}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
