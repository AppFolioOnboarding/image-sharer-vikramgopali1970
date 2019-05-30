import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it, beforeEach } from 'mocha';
import React from 'react';
import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FlashMessage from '../../components/FlashMessage';

describe('<App />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      stores: {
        feedbackStore: {
          response: {
            msg: '',
            type: ''
          }
        }
      }
    };
    wrapper = shallow(<App {...props} />).dive();
  });

  it('should render Header', () => {
    expect(wrapper.find(Header)).to.have.lengthOf(1);
    expect(wrapper.find(Header).props().title).to.equals('Tell us what you think');
  });

  it('should render Footer', () => {
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
    expect(wrapper.find(Footer).props().footer).to.equals('Copyright: Appfolio Inc. Onboarding');
  });

  it('should render flash message if there is a message', () => {
    props.stores.feedbackStore.response.msg = 'Both fields required';
    props.stores.feedbackStore.response.type = 'danger';
    wrapper = shallow(<App {...props} />).dive();
    expect(wrapper.find(FlashMessage)).to.have.lengthOf(1);
    expect(wrapper.find(FlashMessage).props().flashMessage).to.equals('Both fields required');
    expect(wrapper.find(FlashMessage).props().flashType).to.equals('danger');
  });

  it('should not render flash message if there is no message', () => {
    expect(wrapper.find(FlashMessage)).to.have.lengthOf(0);
  });
});
