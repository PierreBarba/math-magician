import React from 'react';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('rendering without glitches', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Calculator />);
});

test('anchor Home snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});