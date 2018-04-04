import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

function setup(props) {
  return shallow(<LoginForm {...props} />);
}

describe('<LoginForm /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      onSubmit: function () { }
    });
  
    expect(wrapper.find('form')).toHaveLength(1);
  });
});
