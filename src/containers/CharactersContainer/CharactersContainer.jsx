import React, { useState, useEffect } from 'react';
import Characters from '../../components/Characters/Character.jsx';
import { fetchAirbenderCharacters } from '../../services/airbenderApi.js';

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAirbenderCharacters()
      .then(receivedCharacters => setCharacters(receivedCharacters));
  }, []);

  return (
    <>
      <Characters characters={characters} />
    </>
  );
};

export default CharactersContainer;
