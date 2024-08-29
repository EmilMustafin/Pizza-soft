import { employeeSlice } from '@/entities/employee';
import { EmployeeList } from '@/features/employee-list';
import { useAppSelector } from '@/shared/lib/redux';

export const HomePage = () => {
  const employees = useAppSelector(employeeSlice.selectors.getEmployees);
  return <EmployeeList employees={employees} />;
};
