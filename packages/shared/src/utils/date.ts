export const dateToYearMonthString = (date: string) => {
  return date.slice(0, -3);
};

export const dateToYearMonthDay = (date: number | Date, mode: 'utc' | 'local' = 'local') => {
  let _date: Date;

  if (typeof date === 'number') {
    _date = new Date(date);
  } else {
    _date = date;
  }

  const year = mode === 'utc' ? _date.getUTCFullYear() : _date.getFullYear();
  const month = mode === 'utc' ? _date.getUTCMonth() : _date.getMonth();
  const day = mode === 'utc' ? _date.getUTCDate() : _date.getDate();

  return `${year}.${('0' + (month + 1)).slice(-2)}.${('0' + day).slice(-2)}`;
};

export const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

/** Formats a date into a string in the format "DD.MM.YY", based on the given mode (local or UTC). */
export const formatDate = (
  date: Date | number | string,
  mode: 'local' | 'utc' = 'local',
  separator: '.' | '/' | '-' = '.'
) => {
  if (typeof date === 'string') {
    date = new Date(date.replaceAll('.', '-'));
  }

  const value = typeof date === 'number' ? new Date(date) : date;

  let day;
  let month;
  let year;

  if (mode === 'utc') {
    day = value.getUTCDate();
    month = value.getUTCMonth() + 1;
    year = value.getUTCFullYear() % 100;
  } else {
    day = value.getDate();
    month = value.getMonth() + 1;
    year = value.getFullYear() % 100;
  }

  const dayString = day.toString().padStart(2, '0');
  const monthString = month.toString().padStart(2, '0');
  const yearString = year.toString().padStart(2, '0');

  return dayString + separator + monthString + separator + yearString;
};

export const nameOfDay = (year: number, month: number, day: number) => {
  return new Intl.DateTimeFormat('en-UK', {
    weekday: 'long',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
};
