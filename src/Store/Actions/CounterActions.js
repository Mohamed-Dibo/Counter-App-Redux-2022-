import { INCREAMENT, DECREAMENT } from "./ActionsTypes";
export const increament = async (dispatch) => {
  return dispatch({
    type: INCREAMENT,
  });
};
export const decreament = async (dispatch) => {
  return dispatch({
    type: DECREAMENT,
  });
};
