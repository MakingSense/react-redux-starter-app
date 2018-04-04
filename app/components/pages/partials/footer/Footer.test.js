import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

function setup(props) {
  return shallow(<Footer {...props} />);
}

describe('<Footer /> component', () => {
  it('renders itself', () => {
    const wrapper = setup();

    expect(wrapper.find('footer')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);

    const linkToGitHub = wrapper.find('a');
    expect(linkToGitHub).toHaveLength(1);
    expect(linkToGitHub.text()).toBe('GitHub');
  });
});
