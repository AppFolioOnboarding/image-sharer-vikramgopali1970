import { describe, it } from 'mocha';
import { expect } from 'chai';
import FeedbackStore from '../../stores/FeedbackStore';

describe('FeedbackStore', () => {
  it('should initialize store variables correctly', () => {
    const fbs = new FeedbackStore();
    expect(fbs.name).to.equals('');
    expect(fbs.comments).to.equals('');
  });

  it('should update name correctly', () => {
    const fbs = new FeedbackStore();
    fbs.updateName('appfolio');
    expect(fbs.name).to.equals('appfolio');
  });

  it('should update comments correctly', () => {
    const fbs = new FeedbackStore();
    fbs.updateComments('is a good place to work');
    expect(fbs.comments).to.equals('is a good place to work');
  });
});
