import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './Main'; // Undecorated version.

function setup(props) {
  return shallow(<Main {...props} />);
}

const component = '<Main />';

test(`${component} renders itself`, () => {
  const wrapper = setup({
    actions: {}
  });

  expect(wrapper.find('Switch')).toHaveLength(1);
  expect(wrapper.find('PrivateRoute')).toHaveLength(1);
  expect(wrapper.find('Route')).toHaveLength(2);

  expect(wrapper.find('Header')).toHaveLength(1);
  expect(wrapper.find('Footer')).toHaveLength(1);
});
