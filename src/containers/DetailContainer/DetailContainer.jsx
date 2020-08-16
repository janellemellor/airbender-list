import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Detail from '../../components/Detail/Detail.jsx';
import { fetchCharacterById } from '../../services/airbenderApi.js';

const DetailContainer = ({ match }) => {
  const [character, setCharacter] = useState('');

  useEffect(() => {
    fetchCharacterById(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Detail {...character} />
    </>
  );
};

DetailContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default DetailContainer;

