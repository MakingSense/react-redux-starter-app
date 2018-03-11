import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from './PrivateRoute';

function setup(props) {
  return shallow(<PrivateRoute {...props} />);
}

const component = '<PrivateRoute />';

test(`${component} renders itself`, () => {
  const wrapper = setup();
  expect(wrapper.find('Route')).toHaveLength(1);
});
