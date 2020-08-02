import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}

/*
reducers - index
reducers - alert
actions - types.js
actions - alert.js(install uuid)
generate in reg component then import connect from react-redux
import set from actions 
create a component in alert
import prop types
embed in app.js

*/
