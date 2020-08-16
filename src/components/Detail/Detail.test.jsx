import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../Detail/Detail.jsx';

describe('Detail component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Detail image='https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441' name='46th Earth King' affiliation='Earth Kingdom Earth Kingdom Royal Family' allies='Royal Earthbender Guards' enemies='Chin' />);
    expect(wrapper).toMatchSnapshot();
  });
});

