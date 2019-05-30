import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { Alert } from 'reactstrap';
import React from 'react';
import FlashMessage from '../../components/FlashMessage';

describe('<FlashMessage />', () => {
  it('should render flash message correctly', () => {
    const props = {
      flashMessage: 'Feedback received. Thank you..!!',
      flashType: 'success'
    };
    const wrapper = shallow(<FlashMessage {...props} />);
    expect(wrapper.find(Alert)).to.have.lengthOf(1);
    expect(wrapper.find(Alert).children().text()).to.equals(props.flashMessage);
    expect(wrapper.find(Alert).prop('color')).to.equals(props.flashType);
  });
});
