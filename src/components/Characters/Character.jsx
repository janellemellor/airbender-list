import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, affiliation }) => (
  <>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{affiliation}</p>
  </>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};

export default Character;
