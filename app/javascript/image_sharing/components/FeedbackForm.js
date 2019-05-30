import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Form, FormGroup, Label, Input, Row, Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';

@inject('stores')

@observer
class FeedbackForm extends Component {
  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.updateName = this.updateName.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.postFeedback = this.postFeedback.bind(this);
  }

  updateName(event) {
    this.props.stores.feedbackStore.updateName(event.target.value);
  }

  updateComment(event) {
    this.props.stores.feedbackStore.updateComments(event.target.value);
  }

  postFeedback() {
    this.props.stores.feedbackStore.postFeedBack();
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <Form>

              <FormGroup>
                <Label for="name">Your Name:</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  onChange={this.updateName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="comment">Comments:</Label>
                <Input
                  type="textarea"
                  name="comment"
                  id="comment"
                  placeholder="Type your comments here"
                  onChange={this.updateComment}
                />
              </FormGroup>
              <Button color="primary" onClick={this.postFeedback}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}


export default FeedbackForm;
