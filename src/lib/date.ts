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
export default { DateToStringWithFormat, now, stringToDate };
