import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData, saveSearch } from '../actions/search';
import Searchresult from './Searchresult';
const Search = ({ getData, saveSearch }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className='post-form'>
        <div className='bg-primary p'>
          <h3>Fetching Data from Hacker News API</h3>
        </div>
        <form
          className='form my-1'
          onSubmit={e => {
            e.preventDefault();
            getData(text);
            saveSearch(text);
            setText('');
          }}
        >
          <input
            type='name'
            placeholder='Search an item'
            name='search'
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <br></br>
          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
      <Searchresult />
    </Fragment>
  );
};

Search.propTypes = {
  getData: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired
};

export default connect(null, { getData, saveSearch })(Search);
