import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchItem = ({ result: { title, url, author, story } }) => {
  return (
    <p className='search_result bg-light'>
      <p>
        <h2>{title}</h2>
        <p>
          <Link to={url} className='btn btn-primary'>
            {url}
          </Link>
        </p>
        <p className='my-1'>
          <span>{author}</span>
        </p>
        <p>
          <span>{story}</span>
        </p>
      </p>
    </p>
  );
};

SearchItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default SearchItem;
