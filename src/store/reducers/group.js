import {createReducer} from '../../utils';

const initialState = {
  group: null,
};

export const reducer = createReducer(initialState, {
  '@@auth/SET_GROUP'(state, action) {
    return {
      ...state,
      group: action.payload,
    };
  },
});
