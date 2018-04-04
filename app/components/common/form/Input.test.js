import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

function setup(props) {
  return shallow(<Input {...props} />);
}

describe('<Input /> component', () => {
  it('renders itself', () => {
    const wrapper = setup();
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('uses "type" attribute', () => {
    const type = 'email';
    const wrapper = setup({
      type: type
    });
  
    expect(wrapper.find('input').prop('type')).toEqual(type);
  });

  it('uses "name" attribute', () => {
    const name = 'test';
    const wrapper = setup({
      name: name
    });
  
    expect(wrapper.find('input').prop('name')).toEqual(name);
  });

  it('uses "placeholder" attribute', () => {
    const placeholder = 'test';
    const wrapper = setup({
      placeholder: placeholder
    });
  
    expect(wrapper.find('input').prop('placeholder')).toEqual(placeholder);
  });
});
