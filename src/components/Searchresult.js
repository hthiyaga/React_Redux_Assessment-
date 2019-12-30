import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../actions/search';
import SearchItem from './SearchItem';
// export const Searchresult = () => {
//   return <div></div>;
// };

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
          <p className='large text-primary'>Search results</p>

          <div className='posts'>
            {results.hits.map(result => (
              <SearchItem key={result.hits} result={result} />
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
