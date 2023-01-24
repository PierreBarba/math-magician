import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('anchor Home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
