import { GET_DATA, SEARCH_ERROR } from '../actions/types';
const initialState = {
  results: [],
  loading: true,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        loading: false,
        results: payload
      };

    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
