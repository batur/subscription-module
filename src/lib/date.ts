import { DateTime } from 'luxon';

function DateToStringWithFormat(date: Date, format: string): string {
  return DateTime.fromJSDate(date).toFormat(format);
}

function now(): Date {
  return DateTime.local().toJSDate();
}

function stringToDate(dateString: string): Date {
  return DateTime.fromFormat(dateString, 'dd-MM-yyyy').toJSDate();
}

function firstDayofMonth(): Date {
  return DateTime.local().startOf('month').minus({ days: 1 }).toJSDate();
}

export default { DateToStringWithFormat, now, stringToDate, firstDayofMonth };
