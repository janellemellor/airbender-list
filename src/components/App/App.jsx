import React from 'react';
import {
  Route,
  Switch, 
  BrowserRouter as Router,
} from 'react-router-dom';
import CharactersContainer from '../../containers/CharactersContainer/CharactersContainer.jsx';
import DetailContainer from '../../containers/DetailContainer/DetailContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={CharactersContainer} />
        <Route path="/character/:id" component={DetailContainer} />
      </Switch>
    </Router>  
  );
}
