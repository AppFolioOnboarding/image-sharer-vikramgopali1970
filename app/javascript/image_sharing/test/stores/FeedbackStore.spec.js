import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import FeedbackStore from '../../stores/FeedbackStore';
import * as apiHelper from '../../utils/helper';

describe('FeedbackStore', () => {
  let fbs;
  beforeEach(() => {
    fbs = new FeedbackStore();
  });

  it('should initialize store variables correctly', () => {
    expect(fbs.name).to.equals('');
    expect(fbs.comments).to.equals('');
    expect(fbs.response.msg).to.equals('');
    expect(fbs.response.type).to.equals('');
  });

  it('should update name correctly', () => {
    fbs.updateName('appfolio');
    expect(fbs.name).to.equals('appfolio');
  });

  it('should update comments correctly', () => {
    fbs.updateComments('is a good place to work');
    expect(fbs.comments).to.equals('is a good place to work');
  });

  it('should post feedback with success', () => {
    apiHelper.post = sinon.stub()
      .resolves({ data: 'Feedback received. Thank you..!!', type: 'success' });
    fbs.postFeedBack().then(() => {
      expect(fbs.response.msg).to.equals('Feedback received. Thank you..!!');
      expect(fbs.response.type).to.equals('success');
    });
  });

  it('should post feedback with error', () => {
    apiHelper.post = sinon.stub()
      .resolves({ data: 'Both fields required', type: 'danger' });
    fbs.postFeedBack().then(() => {
      expect(fbs.response.msg).to.equals('Both fields required');
      expect(fbs.response.type).to.equals('danger');
    });
  });
});
