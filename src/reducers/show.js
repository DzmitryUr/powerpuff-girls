import { SET_SHOW, SET_SHOW_ERROR } from '../actions';

const defaultState = {
  show: {},
  showError: false,
};

const show = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_SHOW:
      return { ...state, show: action.show };
    case SET_SHOW_ERROR:
      return { ...state, showError: action.showError };
    default:
      return state;
  }
};

export default show;
