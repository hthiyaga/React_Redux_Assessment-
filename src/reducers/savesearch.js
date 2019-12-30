import { SAVE_SEARCH } from '../actions/types';

const initialState = {
  save: []
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SEARCH:
      return {
        ...state,
        save: payload
      };

    default:
      return state;
  }
}
