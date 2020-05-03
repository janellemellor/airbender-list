import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Character from './Character.jsx';

const Characters = ({ characters }) => {
  const allCharacters = characters.map
  (character => (
    <li key={character.id}>
      {console.log(character)}
      <Link to={`/${character.id}`} >
        <Character {...character} />  
      </Link>  
    </li>
  ));

  return (
    <ul>
      {allCharacters}    
    </ul>
  ); 
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired
  }))
};

export default Characters;
