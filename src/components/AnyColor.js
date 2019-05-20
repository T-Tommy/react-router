import React from 'react';
import PropTypes from 'prop-types';
import sizingCSS from './color.css';

function AnyColor({ match }) {
  return (
    <div style={ { background: match.params.color } } className={ sizingCSS.div }></div>
  );
}

AnyColor.propTypes = {
  match: PropTypes.object.isRequired
};

export default AnyColor;
