import { GET_DATA, SEARCH_ERROR } from '../actions/types';
const initialState = {
  loading: true
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        loading: false,
        user: payload
      };

    case SEARCH_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
