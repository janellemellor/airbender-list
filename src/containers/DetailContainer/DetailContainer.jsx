import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Detail from '../../components/Detail/Detail.jsx';
import fetchCharacterById from '../../services/airbenderApi.js';

const DetailContainer = () => {
  const [character, setCharacter] = useState({});

  const match = useRouteMatch('/character/:id');

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

export default DetailContainer;

