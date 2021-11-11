import reducers, { setDate } from 'context/reducers';

import { date } from 'lib';

test('Initial State', () => {
  expect(reducers(undefined, {} as any)).toEqual({
    date: date.DateToStringWithFormat(date.now(), 'dd-MM-yyyy'),
  });
});

test('Change Date', () => {
  const previousState = {
    date: '',
  };
  expect(reducers(previousState, setDate(date.now()))).toEqual({
    date: date.now(),
  });
});
