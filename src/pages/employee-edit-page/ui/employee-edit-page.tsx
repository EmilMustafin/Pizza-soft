import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Employee, employeeSlice, Role } from '@/entities/employee';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Input } from '@/shared/ui/input/input';
import { Select } from '@/shared/ui/select/select';
import styles from './employee-edit-page.module.scss';

const roles = [
  { value: 'cook', label: 'Cook' },
  { value: 'waiter', label: 'Waiter' },
  { value: 'driver', label: 'Driver' },
];

export const EmployeeEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const employee = useAppSelector((state) =>
    employeeSlice.selectors.selectEmployeeById(state, Number(id)),
  );
  const [formData, setFormData] = useState<Employee | undefined>(employee);
  const [selectedRole, setSelectedRole] = useState<Role>(employee?.role || '');
  const [showArchived, setShowArchived] = useState<boolean>(employee?.isArchive || false);

  const handleSubmit = () => {
    if (formData) {
      dispatch(
        employeeSlice.actions.updateEmployee({
          ...formData,
          isArchive: showArchived,
          role: selectedRole,
        }),
      );
    }

    navigate('/', { replace: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;

    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRoleChange = (value: string) => {
    setSelectedRole(value as Role);
  };

  if (!employee) return <h1>Employee not found</h1>;

  return (
    <div className={styles.container}>
      <button className={styles.back_button} onClick={() => navigate('/', { replace: true })}>
        Назад
      </button>
      <h1 className={styles.title}>Edit Employee</h1>
      <div className={styles.formGroup}>
        <label htmlFor='name' className={styles.label}>
          Имя
        </label>
        <Input.Text
          id='name'
          placeholder='Введите имя'
          name='name'
          value={formData?.name || ''}
          required
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor='phone' className={styles.label}>
          Номер телефона
        </label>
        <Input.Tel
          id='phone'
          label='Номер телефона'
          name='phone'
          required
          value={formData?.phone || ''}
          mask='+7 (***) ***-**-**'
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor='birthday' className={styles.label}>
          Дата рождения
        </label>
        <Input.Date
          id='birthday'
          placeholder='__.__.____'
          name='birthday'
          required
          value={formData?.birthday || ''}
          onChange={handleChange}
          className={styles.input}
        />
        <label htmlFor='role' className={styles.label}>
          Роль
        </label>
        <Select id='role' options={roles} value={selectedRole} onChange={handleRoleChange} />
        <label htmlFor='archive' className={styles.label}>
          Архив
        </label>
        <label className={styles.label}>
          <input
            type='checkbox'
            id='archive'
            name='isArchive'
            checked={showArchived}
            onChange={(e) => setShowArchived(e.target.checked)}
          />
          <span className={styles.label_archive}>в архиве</span>
        </label>
      </div>
      <div className={styles.formActions}>
        <button className={styles.button} onClick={handleSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
