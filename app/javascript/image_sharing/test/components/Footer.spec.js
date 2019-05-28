import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { Label } from 'reactstrap';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const props = {
      footer: 'Copyright: Appfolio Inc. Onboarding'
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper.find(Label)).to.have.lengthOf(1);
    expect(wrapper.find(Label).children().text()).to.equals(props.footer);
  });
});
