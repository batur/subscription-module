import { DateTime } from 'luxon';

function DateToStringWithFormat(date: Date, format: string): string {
  return DateTime.fromJSDate(date).toFormat(format);
}

export default { DateToStringWithFormat };
