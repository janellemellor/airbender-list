import React, { useState, useEffect } from 'react';
import Characters from '../../components/Characters/Characters.jsx';
import { fetchAirbenderCharacters } from '../../services/airbenderApi.js';

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAirbenderCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <>
      <Characters characters={characters} />
    </>
  );
};

export default CharactersContainer;
