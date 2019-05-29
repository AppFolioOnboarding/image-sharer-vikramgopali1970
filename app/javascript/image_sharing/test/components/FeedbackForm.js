import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import FeedbackForm from '../../components/FeedbackForm';
import Store from '../../stores/FeedbackStore';

describe('<Form />', () => {
  it('check for label and input for name fields', () => {
    const props = {
      stores: {
        feedbackStore: new Store()
      }
    };
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    expect(wrapper.find({ for: 'name' }).children().text()).to.equals('Your Name:');
    expect(wrapper.find('#name')).to.have.lengthOf(1);
  });

  it('check for label and input for comments fields', () => {
    const props = {
      stores: {
        feedbackStore: new Store()
      }
    };
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    expect(wrapper.find({ for: 'comment' }).children().text()).to.equals('Comments:');
    expect(wrapper.find('#comment')).to.have.lengthOf(1);
  });

  it('check the onChange method for name', () => {
    const props = {
      stores: {
        feedbackStore: {
          updateName: sinon.spy(),
          updateComments: sinon.spy()
        }
      }
    };
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    const nameInput = wrapper.find('#name');
    nameInput.simulate('change', { target: { value: 'Appfolio' } });
    expect(props.stores.feedbackStore.updateName.calledWith('Appfolio')).to.equals(true);
  });

  it('check the onChange method for comment', () => {
    const props = {
      stores: {
        feedbackStore: {
          updateName: sinon.spy(),
          updateComments: sinon.spy()
        }
      }
    };
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    const commentInput = wrapper.find('#comment');
    commentInput.simulate('change', { target: { value: 'is a good place to work' } });
    expect(props.stores.feedbackStore.updateComments.calledWith('is a good place to work')).to.equals(true);
  });
});
