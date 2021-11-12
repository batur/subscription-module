const setDate = (date: string) => ({
  type: 'SET_DATE',
  payload: date,
});

const setPaused = (paused: boolean) => ({
  type: 'SET_PAUSED',
  payload: paused,
});

const setCancelled = (cancelled: boolean) => ({
  type: 'SET_CANCELLED',
  payload: cancelled,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { setDate, setPaused, setCancelled };
