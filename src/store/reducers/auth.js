import {createReducer} from '../../utils';

const initialState = {
  user: null,
};

export const reducer = createReducer(initialState, {
  '@@auth/SET_USER'(state, action) {
    return {
      ...state,
      user: action.payload,
    };
  },
});
