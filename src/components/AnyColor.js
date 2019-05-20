import React from 'react';
import PropTypes from 'prop-types';
import sizingCSS from './color.css';

function Color({ match: { params: { color } } }) {
  return (
    <div style={ { background: color } } className={ sizingCSS.div }></div>
  );
}

Color.propTypes = {
  match: PropTypes.object.isRequired
};

export default Color;
