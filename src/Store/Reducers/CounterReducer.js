import { INCREAMENT, DECREAMENT } from "../Actions/ActionsTypes";
const initialState = {
  count: 0,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case INCREAMENT:
      return { count: state.count + 1 };
      break;
    case DECREAMENT:
      return { count: state.count - 1 };
      break;
    default:
      return state;
  }
};
