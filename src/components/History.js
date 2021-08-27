import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const History = ({ history: { save } }) => {


  return (
    <Fragment>
    
     <Link to='/'>Main Page</Link>
     <p>Search history</p>
     <p>==============</p>
     <div>
        {save.map(s => (
          <p>{s}</p>
        ))}
      </div>

    </Fragment>
  );
};

History.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  history: state.history
});

export default connect(mapStateToProps)(History);
