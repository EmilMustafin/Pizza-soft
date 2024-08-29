import { Employee } from '@/entities/employee';

export const filterAndSortEmployees = (
  employees: Employee[],
  selectedRole: string,
  showArchived: boolean,
  sortBy: string,
): Employee[] => {
  const filteredEmployees = employees.filter((employee) => {
    const matchesRole = selectedRole ? employee.role === selectedRole : true;
    const matchesStatus = showArchived ? employee.isArchive : !employee.isArchive;
    return matchesRole && matchesStatus;
  });
  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'dob') {
      const parseDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
      };
      return parseDate(a.birthday).getTime() - parseDate(b.birthday).getTime();
    }
    return 0;
  });

  return sortedEmployees;
};
