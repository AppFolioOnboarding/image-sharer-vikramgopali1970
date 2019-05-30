import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it, beforeEach } from 'mocha';
import { Button } from 'reactstrap';
import sinon from 'sinon';
import FeedbackForm from '../../components/FeedbackForm';

describe('<Form />', () => {
  let props;

  beforeEach(() => {
    props = {
      stores: {
        feedbackStore: {
          updateName: sinon.spy(),
          updateComments: sinon.spy(),
          postFeedBack: sinon.spy()
        }
      }
    };
  });

  it('check for label and input for name fields', () => {
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    expect(wrapper.find({ for: 'name' }).children().text()).to.equals('Your Name:');
    expect(wrapper.find('#name')).to.have.lengthOf(1);
  });

  it('check for label and input for comments fields', () => {
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    expect(wrapper.find({ for: 'comment' }).children().text()).to.equals('Comments:');
    expect(wrapper.find('#comment')).to.have.lengthOf(1);
  });

  it('check the onChange method for name', () => {
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    const nameInput = wrapper.find('#name');
    nameInput.simulate('change', { target: { value: 'Appfolio' } });
    expect(props.stores.feedbackStore.updateName.calledWith('Appfolio')).to.equals(true);
  });

  it('check the onChange method for comment', () => {
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    const commentInput = wrapper.find('#comment');
    commentInput.simulate('change', { target: { value: 'is a good place to work' } });
    expect(props.stores.feedbackStore.updateComments
      .calledWith('is a good place to work')).to.equals(true);
  });

  it('check the onClick method for submit', () => {
    const wrapper = shallow(<FeedbackForm {...props} />).dive();
    const submitBtn = wrapper.find(Button);
    submitBtn.simulate('click');
    expect(props.stores.feedbackStore.postFeedBack
      .calledOnce).to.equals(true);
  });
});
