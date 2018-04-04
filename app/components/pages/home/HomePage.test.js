import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

function setup(props) {
  return shallow(<HomePage {...props} />);
}

describe('<HomePage /> component', () => {
  it('renders itself', () => {
    const user = {
      name: 'John'
    };
    const wrapper = setup({
      actions: {},
      user
    });

    expect(wrapper.find('section')).toHaveLength(1);

    const subtitle = wrapper.find('h2');
    expect(subtitle).toHaveLength(1);
    expect(subtitle.text()).toBe('Home');

    const welcome = wrapper.find('p');
    expect(welcome).toHaveLength(1);
    expect(welcome.text()).toBe(`Hello ${user.name}!`);
  });
});
