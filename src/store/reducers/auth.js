import {createReducer} from '../../utils';

const initialState = {
  user: null,
  employees: null,
  error: null,
};

export const reducer = createReducer(initialState, {
  '@@auth/SET_USER'(state, action) {
    return {
      ...state,
      user: action.payload,
    };
  },
  '@@auth/LOGIN_ERROR'(state, action) {
    return {
      ...state,
      error: action.payload,
    };
  },
  '@@auth/SET_EMPLOYEES'(state, action) {
    return {
      ...state,
      employees: action.payload,
    };
  },
});
