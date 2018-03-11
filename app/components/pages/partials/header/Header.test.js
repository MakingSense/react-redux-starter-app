import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

function setup(props) {
  return shallow(<Header {...props} />);
}

const component = '<Header />';

test(`${component} renders itself`, () => {
  const wrapper = setup();

  expect(wrapper.find('header')).toHaveLength(1);

  const title = wrapper.find('h1');
  expect(title).toHaveLength(1);
  expect(title.text()).toBe('React+Redux starter app');
});
