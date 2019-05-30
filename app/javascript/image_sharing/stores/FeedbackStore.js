import { observable, action } from 'mobx';
import { post } from '../utils/helper';

export default class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comments = '';
  @observable response = {
    msg: '',
    type: ''
  };

  @action updateName = (name) => {
    this.name = name;
  };

  @action updateComments = (comment) => {
    this.comments = comment;
  };

  @action postFeedBack = () =>
    post('/api/feedbacks', { name: this.name, comments: this.comments })
      .then((res) => {
        this.response.msg = res.data;
        this.response.type = res.type;
      });
}
