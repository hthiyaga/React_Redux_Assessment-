import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../actions/search';
import SearchItem from './SearchItem';
// export const Searchresult = () => {
//   return <div></div>;
// };

const Searchresult = ({ getData, results }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Search results</h1>
      <p className='lead'>
        <i className='fas fa-user' /> HN API results
      </p>

      <div className='posts'>
        {results.map(result => (
          <SearchItem key={result._id} result={result} />
        ))}
      </div>
    </Fragment>
  );
};

Searchresult.propTypes = {
  getData: PropTypes.func.isRequired,
  results: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps, { getData })(Searchresult);
