import React from 'react';

import PropTypes from 'prop-types';

const SearchItem = ({ result: { title, url } }) => {
  return (
    <p className='search_result bg-light'>
      <p>
        <span>{title}</span>
        <p>
          <a href={url} rel='noopener noreferrer' className='btn btn-primary'>
            View the site
          </a>
        </p>
      </p>
    </p>
  );
};

SearchItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default SearchItem;
