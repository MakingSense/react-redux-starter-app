import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from './PrivateRoute';

function setup(props) {
  return shallow(<PrivateRoute {...props} />);
}

describe('<PrivateRoute /> component', () => {
  it('renders itself', () => {
    const wrapper = setup();
    expect(wrapper.find('Route')).toHaveLength(1);
  });
});
