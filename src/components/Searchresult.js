import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../actions/search';
import SearchItem from './SearchItem';
// export const Searchresult = () => {
//   return <div></div>;
// };

const Searchresult = ({ getData, results, loading }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Fragment>
      {loading ? (
        <p>Yet to search</p>
      ) : (
        <Fragment>
          <h4 className='large text-primary'>Search results</h4>

          <div className='posts'>
            {/* {results.map(result => (
              <SearchItem key={result._id} result={result} />
            ))} */}
          </div>
        </Fragment>
      )}
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
