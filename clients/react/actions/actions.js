import { FETCH_USER, FETCH_SURVEYS } from './../types/types';

export const fetchUser = () => async dispatch => {
  const res = await fetch('/apis/media');
  let data = await res.json();
  dispatch({ type: FETCH_USER, payload: data });
};
