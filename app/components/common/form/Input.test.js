import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

function setup(props) {
  return shallow(<Input {...props} />);
}

const component = '<Input />';

test(`${component} renders itself`, () => {
  const wrapper = setup();
  expect(wrapper.find('input')).toHaveLength(1);
});

const typeAttribute = 'type';
test(`${component} uses "${typeAttribute}" attribute`, () => {
  const type = 'email';
  const wrapper = setup({
    type: type
  });

  expect(wrapper.find('input').prop(typeAttribute)).toEqual(type);
});

const nameAttribute = 'name';
test(`${component} uses "${nameAttribute}" attribute`, () => {
  const name = 'test';
  const wrapper = setup({
    name: name
  });

  expect(wrapper.find('input').prop(nameAttribute)).toEqual(name);
});

const placeholderAttribute = 'placeholder';
test(`${component} uses "${placeholderAttribute}" attribute`, () => {
  const placeholder = 'test';
  const wrapper = setup({
    placeholder: placeholder
  });

  expect(wrapper.find('input').prop(placeholderAttribute)).toEqual(placeholder);
});
