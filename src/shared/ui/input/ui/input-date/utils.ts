export const dateToString = (date: Date) => {
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
export const stringToDate = (dateString: string): Date | null => {
  const [day, month, year] = dateString.split('.').map(Number);
  if (!day || !month || !year || day > 31 || month > 12 || year < 1000 || year > 9999) {
    return null;
  }
  const date = new Date(year, month - 1, day);
  return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year
    ? date
    : null;
};
