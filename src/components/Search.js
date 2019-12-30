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
        <div className='heading'>
          <h3>Fetching Title and URL from Hacker News API </h3>
        </div>
        <form
          className='form search'
          onSubmit={e => {
            e.preventDefault();
            getData(text);
            saveSearch(text);
            setText('');
          }}
        >
          <input
            type='text'
            placeholder='Search an item'
            name='search'
            value={text}
            onChange={e => setText(e.target.value)}
            required
          />
          <br></br>
          <input type='submit' className='btn' value='Submit' />
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
