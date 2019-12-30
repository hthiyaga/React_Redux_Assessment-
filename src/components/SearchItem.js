import React from 'react';

import PropTypes from 'prop-types';

const SearchItem = ({ result: { title, url } }) => {
  return (
    <div>
      <div className='search_result'>
        <h5>Title</h5>
        <span>{title}</span>
        <p>
          {url ? (
            <a href={url} rel='noopener noreferrer' target='_blank'>
              View the site
            </a>
          ) : (
            <span className='nourl'> No url found:(</span>
          )}
        </p>
      </div>
      <br></br>
    </div>
  );
};

SearchItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default SearchItem;
