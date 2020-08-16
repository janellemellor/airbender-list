import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character.jsx';

describe('Character', () => {
  it('matches the Character snapshot', () => {
    const wrapper = shallow(<Character image='https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441' name='46th Earth King' affiliation='Earth Kingdom Earth Kingdom Royal Family' />);
    expect(wrapper).toMatchSnapshot();
  }); 
});

