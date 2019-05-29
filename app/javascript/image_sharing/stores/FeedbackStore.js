import { observable, action } from 'mobx';
import { post } from '../utils/helper';

export default class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comments = '';

  @action updateName = (name) => {
    this.name = name;
  };

  @action updateComments(comment) {
    this.comments = comment;
  }
}
