const setDate = (date: string) => ({
  type: 'SET_DATE',
  payload: date,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { setDate };
