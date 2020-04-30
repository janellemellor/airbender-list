export const fetchAirbenderCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.map(character => ({
      name: character.name,
      affiliation: character.affiliation, 
      image: character.photoUrl, 
      allies: character.allies, 
      enemies: character.enemies
    })));
};

