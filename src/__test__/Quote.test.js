import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('anchor Home snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
