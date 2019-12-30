import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../actions/search';
import SearchItem from './SearchItem';

const Searchresult = ({ getData, search: { results, loading } }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      {loading ? (
        <p>Yet to search</p>
      ) : (
        <Fragment>
          <p>Search results</p>

          <div>
            {results.hits.map(result => (
              <SearchItem key={result.created_at} result={result} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Searchresult.propTypes = {
  getData: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(mapStateToProps, { getData })(Searchresult);
