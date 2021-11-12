import { date } from 'lib';

const MOCK_DATA = {
  date: new Date(2019, 0, 1),
  string: '01-01-2019',
};

const now = new Date();

test('date', () => {
  expect(date).toBeDefined();
});

test('date.DateToStringWithFormat', () => {
  expect(date.DateToStringWithFormat(MOCK_DATA.date, 'dd-MM-yyyy')).toBeDefined();
  expect(date.DateToStringWithFormat(MOCK_DATA.date, 'dd-MM-yyyy')).toBe(MOCK_DATA.string);
});

test('date.now', () => {
  expect(date.now()).toBeDefined();
  expect(date.now().toLocaleDateString()).toBe(now.toLocaleDateString());
});

test('date.stringToDate', () => {
  expect(date.stringToDate(MOCK_DATA.string)).toBeDefined();
  expect(date.stringToDate(MOCK_DATA.string).toLocaleDateString()).toBe(
    MOCK_DATA.date.toLocaleDateString()
  );
});

test('date.firstDayofMonth', () => {
  expect(date.firstDayofMonth()).toBeDefined();
  const dateTest = new Date(now.setMonth(-1));
  expect(date.firstDayofMonth().toLocaleDateString()).toBe(dateTest.toLocaleDateString());
});
