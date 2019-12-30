import axios from 'axios';
import { GET_DATA, SEARCH_ERROR, SAVE_SEARCH } from './types';

//Get data from HN ALGOLIA API

export const getData = searchitem => async dispatch => {
  console.log(searchitem);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (searchitem !== undefined) {
    try {
      const res = await axios.get(
        `http://hn.algolia.com/api/v1/search_by_date?query=${searchitem}&tags=story`,

        config
      );
      console.log(res);
      dispatch({
        type: GET_DATA,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: SEARCH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

const saveitems = [];
export const saveSearch = searchitem => async dispatch => {
  saveitems.push(searchitem);
  console.log(saveitems);
  dispatch({
    type: SAVE_SEARCH,
    payload: saveitems
  });
};
