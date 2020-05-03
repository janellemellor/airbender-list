import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ image, name, affiliation, allies, enemies }) => (
  <>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{affiliation}</p>
    <p>Allies:{allies}</p>
    <p>Enemies:{enemies}</p>
  </>
);

Detail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  allies: PropTypes.array,
  enemies: PropTypes.array,
};

export default Detail;
