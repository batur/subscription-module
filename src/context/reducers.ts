import { date } from 'lib';

export default function reducers(
  state = { date: date.DateToStringWithFormat(date.now(), 'dd-MM-yyyy') },
  action: { payload: string; type: string }
) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
